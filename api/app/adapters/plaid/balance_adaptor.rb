module Plaid
  class BalanceAdaptor < BaseAdaptor
    attr_accessor :access_token, :user

    def initialize(user)
      super

      @user = user
      @access_token = user&.plaid_access_token
    end

    def balance
      return nil unless access_token

      request = Plaid::AccountsBalanceGetRequest.new(
        access_token: access_token,
        options: {
          min_last_updated_datetime: Time.zone.now - 1.day
        }
      )

      response = client.accounts_balance_get(request)

      response.balance
    rescue Plaid::ApiError => e
      AuthAdaptor.handle_auth_error(e, user)

      raise e
    end
  end
end

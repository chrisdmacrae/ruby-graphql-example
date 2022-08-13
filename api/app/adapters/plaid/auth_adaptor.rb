module Plaid
  class AuthAdaptor < BaseAdaptor
    attr_accessor :access_token

    def initialize(user)
      super

      @user = user
      @access_token = user.plaid_access_token
    end

    def authorize
      auth_get_request = Plaid::AuthGetRequest.new
      auth_get_request.access_token = access_token

      auth_response = client.auth_get(auth_get_request)
      auth_response
    rescue Plaid::ApiError => e
      raise e
    end

    def self.handle_auth_error(err, user)
      json_response = JSON.parse(err.response_body)

      if json_response["error_code"] == Plaid::CreditBankIncomeErrorType::ITEM_LOGIN_REQUIRED
        #user&.plaid_access_token = nil
        #user&.save
      end

      raise err
    end
  end
end

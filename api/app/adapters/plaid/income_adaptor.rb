
module Plaid
  class IncomeAdaptor < BaseAdaptor
    attr_accessor :access_token, :user

    def initialize(user)
      super

      @user = user
      @access_token = user.plaid_access_token
    end

    def income
      request = Plaid::CreditBankIncomeGetRequest.new(
        user_token: access_token
      )

      client.credit_bank_income_get(request)
    end
  end
end

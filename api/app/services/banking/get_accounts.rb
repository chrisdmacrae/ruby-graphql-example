module Banking
  class GetAccounts < BaseService
    attr_accessor :user

    def initialize(user)
      @user = user
    end

    def call
      response = Plaid::AuthAdaptor.new(user).authorize

      accounts = response.accounts.map do |plaid_account|
        account = Account.find_or_create_by(
          account_id: plaid_account.account_id,
          account_type: plaid_account.type.to_s,
          account_subtype: plaid_account.subtype,
          currency_code: plaid_account.balances.iso_currency_code,
          user: user
        )

        account.name = plaid_account.name
        account.brand_name = plaid_account.official_name
        account.current_balance = plaid_account.balances.current
        account.available_balance = plaid_account.balances.available
        account.save!

        account
      end

      accounts
    end
  end
end
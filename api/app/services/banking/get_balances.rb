module Banking
  class GetBalances < BaseService
    attr_accessor :user

    def initialize(user)
      @user = user
    end

    def call
      accounts = Account.where(user: user)

      current = 0
      available = 0

      accounts.each do |account|
        current += account.current_balance
        available += account.available_balance
      end

      { current: current, available: available }
    end
  end
end
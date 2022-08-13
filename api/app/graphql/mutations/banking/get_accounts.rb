module Mutations::Banking
  class GetAccounts < Mutations::BaseMutation
    field :accounts, GraphQL::Types::JSON, null: false

    def ready?(**args)
      super(**args)

      is_logged_in?
    end

    def resolve
      user = context[:current_user]

      accounts = ::Banking::GetAccounts.call(user)

      { accounts: accounts }
    rescue StandardError => e
      Rails.logger.error(e.message)
      Rails.logger.error(e.backtrace)

      { user: user }
    end
  end
end
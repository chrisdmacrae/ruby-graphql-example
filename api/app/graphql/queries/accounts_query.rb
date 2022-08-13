# typed: false
module Queries
  module AccountsQuery
    def self.included(child_class)
      child_class.field :accounts, GraphQL::Types::JSON, null: true do
        argument :user_id, String, required: false
      end

      child_class.field :balances, GraphQL::Types::JSON, null: true do
        argument :user_id, String, required: false
      end
    end

    def accounts(**inputs)
      return unless context[:current_user].present?

      if inputs[:user_id].present? && context[:current_user].admin?
        user = User.find(inputs[:user_id])

        user.accounts
      elsif inputs[:user_id].present?
        raise GraphQL::ExecutionError, 'Not authorized'
      end

      context[:current_user].accounts
    end

    def balances(**inputs)
      return unless context[:current_user].present?

      if inputs[:user_id].present? && context[:current_user].admin?
        user = User.find(inputs[:user_id])

        Banking::GetBalances.call(user)
      elsif inputs[:user_id].present?
        raise GraphQL::ExecutionError, 'Not authorized'
      end

      Banking::GetBalances.call(context[:current_user])
    end
  end
end

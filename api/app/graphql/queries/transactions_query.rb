# typed: false
module Queries
  module TransactionsQuery
    def self.included(child_class)
      child_class.field :transactions, GraphQL::Types::JSON, null: true
    end

    def transactions
      user = context[:current_user]

      Plaid::TransactionAdaptor.new(user).all
    end
  end
end

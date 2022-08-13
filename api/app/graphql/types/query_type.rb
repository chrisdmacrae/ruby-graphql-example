# typed: true
module Types
  class QueryType < Internal::BaseObject
    include Queries::AuthQuery
    include Queries::TransactionsQuery
    include Queries::AccountsQuery
    include Queries::PostsQuery
  end
end
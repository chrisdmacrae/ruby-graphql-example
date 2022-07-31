# typed: true
module Types
  class QueryType < Internal::BaseObject
    include Queries::AuthQuery
    include Queries::PostsQuery
  end
end
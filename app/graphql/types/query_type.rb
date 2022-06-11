module Types
  class QueryType < Internal::BaseObject
    include Queries::AuthQuery
    include Queries::PostsQuery

    field :example, String, null: false

    def example
      "foobar"
    end
  end
end
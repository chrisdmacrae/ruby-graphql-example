module Types
  class QueryType < Types::Internal::BaseObject
    field :post, PostType, null: true do
      argument :id, ID, required: true
    end

    def post(id:)
      Post.find(id)
    end
  end
end

module Queries
  module PostsQuery
    def self.included(child_class)
      child_class.field :posts, [::Types::Models::PostType], null: false

      child_class.field :post, ::Types::Models::PostType, null: true do
        argument :id, GraphQL::Types::ID, required: true
      end
    end

    def posts
      Post.all
    end

    def post(id:)
      Post.find(id)
    end
  end
end

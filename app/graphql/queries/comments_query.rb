module Queries
  module CommentsQuery
    def self.included(child_class)
      child_class.field :comments, [::Types::Models::CommentType], null: false do
        argument :post_id, GraphQL::Types::ID, required: true
      end

      child_class.field :commend, ::Types::Models::CommentType, null: true do
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

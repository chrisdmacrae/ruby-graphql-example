# typed: true
module Mutations
  class CreatePost < BaseMutation
    field :post, Types::Models::PostType, null: false

    argument :name, String, required: true

    def resolve(name:)
      post = Post.new(name: name)
      post.save!

      { post: post }
    end
  end
end

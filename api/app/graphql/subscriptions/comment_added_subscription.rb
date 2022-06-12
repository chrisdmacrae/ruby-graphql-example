module Subscriptions
  class CommentAddedSubscription < BaseSubscription
    argument :post_id, Integer, required: true

    field :post, Types::Models::PostType, null: false
    field :comment, Types::Models::CommentType, null: true



    def subscribe(post_id:)
      post = Post.find(post_id)

      { post: post }
    end

    def update(post:)
      latest = post.comments.last

      { comment: latest }
    end
  end
end
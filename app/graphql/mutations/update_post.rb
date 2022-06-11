module Mutations
  class UpdatePost < BaseMutation
    field :post, Types::Models::PostType, null: false

    argument :id, Integer, required: true
    argument :post_id, ID, required: false, loads: Types::Models::PostType
    argument :name, String, required: true

    # We can auto-load a model by its global id (_id) using :loads or we can manually load it by its :id
    # We should not do both in a single mutation...
    def resolve(id:, name:, **inputs)
      post = inputs[:post].present? ? inputs[:post] : Post.find(id)
      post.name = name
      post.save!
      post.reload

      { post: post }    end
  end
end

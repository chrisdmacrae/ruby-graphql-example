module Types::Models
  class PostType < Types::Internal::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :comments, [CommentType], null: true
  end
end


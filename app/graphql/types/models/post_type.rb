# typed: strict
module Types::Models
  class PostType < BaseModelType
    field :id, ID, null: false
    field :name, String, null: true
    field :comments, [CommentType], null: true
  end
end


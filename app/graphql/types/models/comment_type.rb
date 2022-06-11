# typed: strict
module Types::Models
  class CommentType < BaseModelType
    field :id, ID, null: false
    field :message, String, null: true
    field :post_id, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end

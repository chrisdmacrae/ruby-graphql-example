module Types
  class PostType < Types::Internal::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
  end
end

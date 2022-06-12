# typed: strict
module Types::Models
  class BaseModelType < Types::Internal::BaseObject
    field :id, ID, null: false
  end
end

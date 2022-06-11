module Types::Models
  class BaseModelType < Types::Internal::BaseObject
    field :id, ID, null: false

    field_class Types::Internal::BaseField
  end
end

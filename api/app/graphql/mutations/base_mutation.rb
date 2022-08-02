# typed: strict
module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    argument_class ::Types::Internal::BaseArgument
    field_class ::Types::Internal::BaseField
    input_object_class ::Types::Internal::BaseInputObject
    object_class ::Types::Internal::BaseObject

    def is_logged_in?
      context[:current_user].present?
    end
  end
end

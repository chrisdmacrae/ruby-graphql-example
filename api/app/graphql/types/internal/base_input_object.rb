# typed: strict
module Types::Internal
  class BaseInputObject < GraphQL::Schema::InputObject
    argument_class BaseArgument
  end
end

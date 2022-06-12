module Subscriptions
  class BaseSubscription < GraphQL::Schema::Subscription
    object_class Types::Internal::BaseObject
    field_class Types::Internal::BaseField
    argument_class Types::Internal::BaseArgument
  end
end
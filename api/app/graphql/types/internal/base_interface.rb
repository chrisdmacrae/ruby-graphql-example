# typed: strict
module Types::Internal
  module BaseInterface
    include GraphQL::Schema::Interface
    edge_type_class(BaseEdge)
    connection_type_class(BaseConnection)

    field_class BaseField
  end
end

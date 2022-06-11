# typed: strict
module Types::Internal
  class BaseUnion < GraphQL::Schema::Union
    edge_type_class(BaseEdge)
    connection_type_class(BaseConnection)
  end
end

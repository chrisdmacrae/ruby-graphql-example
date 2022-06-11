class RailsGqlSchema < GraphQL::Schema
  query GraphTypes::QueryType
  mutation GraphTypes::MutationType

  # Resolves a graph id from an object passed to the graph
  #
  # Used by:
  # - argument :model_id, null: false, loads: Types::GraphType
  #   - automatically resolves a model from an id in a mutation
  def self.id_from_object(object, type_definition, query_ctx)
    # Generate a unique string ID for `object` here
    # For example, use Rails' GlobalID library (https://github.com/rails/globalid):
    GraphQL::Schema::UniqueWithinType.encode(obj.class.name, obj.id)
  end

  # Resolves an object from a graph id
  #
  # Used by:
  # - argument :model_id, null: false, loads: Types::GraphType
  #   - automatically resolves a model from an id in a mutation
  def self.object_from_id
    model_name, model_id = GraphQL::Schema::UniqueWithinType.decode(id)
    Object.const_get(model_name).find(model_id)
  end
end

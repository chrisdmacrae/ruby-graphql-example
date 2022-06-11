# typed: false
class RailsGqlSchema < GraphQL::Schema
  query Types::QueryType
  mutation Types::MutationType

  # Resolves a graph id from an object passed to the graph
  #
  # Used by:
  # - argument :model_id, null: false, loads: Types::GraphType
  #   - automatically resolves a model from an id in a mutation
  def self.id_from_object(object, type_definition, query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(object.class.name, object.id)
  end

  # Resolves an object from a graph id
  #
  # Used by:
  # - argument :model_id, null: false, loads: Types::GraphType
  #   - automatically resolves a model from an id in a mutation
  def self.object_from_id(node_id, ctx)
    model_name, model_id = GraphQL::Schema::UniqueWithinType.decode(node_id)
    Object.const_get(model_name).find(model_id)
  end

  rescue_from(ActiveRecord::RecordNotFound) do |err, obj, args, ctx, field|
    # Raise a graphql-friendly error with a custom message
    raise GraphQL::ExecutionError, "#{field.type.unwrap.graphql_name} not found"
  end

  rescue_from(StandardError) do |err, obj, args, ctx, field|
    if Rails.env.development?
      raise GraphQL::ExecutionError, "#{err.message}\n\n#{err.backtrace}"
    else
      raise GraphQL::ExecutionError, "Something went wrong, please contact support"
    end
  end
end

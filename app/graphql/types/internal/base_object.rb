module Types::Internal
  class BaseObject < GraphQL::Schema::Object
    edge_type_class(BaseEdge)
    connection_type_class(BaseConnection)
    field_class Auth::CurrentUserField

    global_id_field :_id
  end
end

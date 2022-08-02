# typed: strict
module Types
  class MutationType < Internal::BaseObject
    field :create_post, mutation: Mutations::CreatePost
    field :update_post, mutation: Mutations::UpdatePost

    field :banking_authenticate, mutation: Mutations::Banking::Authenticate
  end
end

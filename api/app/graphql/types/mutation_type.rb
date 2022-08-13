# typed: strict
module Types
  class MutationType < Internal::BaseObject
    field :create_post, mutation: Mutations::CreatePost
    field :update_post, mutation: Mutations::UpdatePost

    ##########
    # Auth
    #########
    field :sign_up, mutation: Mutations::Authorization::SignUp

    ##########
    # Banking
    ##########
    field :banking_authenticate, mutation: Mutations::Banking::Authenticate
    field :get_bank_accounts, mutation: Mutations::Banking::GetAccounts
  end
end

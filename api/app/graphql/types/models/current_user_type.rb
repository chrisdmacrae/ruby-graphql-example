# typed: true
module Types::Models
  class CurrentUserType < Types::Models::UserType
    field :reset_password_token, String, null: true
    field :reset_password_sent_at, GraphQL::Types::ISO8601DateTime, null: true
    field :remember_created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :link_token, String, null: true
    field :auth, GraphQL::Types::JSON, null: true
    field :bank_authorized, Boolean, null: false

    def self.authorized?(object, context)
      object.id == context[:current_user]&.id
    end

    def link_token
      Plaid::LinkAdaptor.new.create(object)
    end

    def bank_auth
      Plaid::AuthAdaptor.new(object).authorize
    end

    def bank_authorized
      object.plaid_access_token.present?
    end
  end
end
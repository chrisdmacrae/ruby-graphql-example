# typed: false
module Queries
  module AuthQuery
    def self.included(child_class)
      child_class.field :current_user, Types::Models::CurrentUserType, null: true
      child_class.field :current_session, GraphQL::Types::JSON, null: true
      child_class.field :xsrf_token, String, null: false
      child_class.field :link_token, String, null: true
      child_class.field :auth, GraphQL::Types::JSON, null: true
    end

    def current_session
      context[:current_session]
    end

    def current_user
      context[:current_user]
    end

    def xsrf_token
      context[:xsrf_token]
    end

    def link_token
      return unless context[:current_user].present?

      Plaid::LinkAdaptor.new.create(context[:current_user])
    end

    def auth
      user = context[:current_user]

      Plaid::AuthAdaptor.new(user).authorize
    end
  end
end

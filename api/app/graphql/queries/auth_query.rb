# typed: false
module Queries
  module AuthQuery
    def self.included(child_class)
      child_class.field :current_user, Types::Models::CurrentUserType, null: true
      child_class.field :current_session, GraphQL::Types::JSON, null: true
      child_class.field :xsrf_token, String, null: false
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
  end
end

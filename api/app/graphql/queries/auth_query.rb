# typed: false
module Queries
  module AuthQuery
    def self.included(child_class)
      child_class.field :current_user, Types::CurrentUserType, null: true
      child_class.field :current_session, GraphQL::Types::JSON, null: true
    end

    def current_session
      context[:current_session]
    end

    def current_user
      context[:current_user]
    end
  end
end

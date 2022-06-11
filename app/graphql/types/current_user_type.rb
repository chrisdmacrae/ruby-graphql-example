# typed: true
module Types
  class CurrentUserType < Types::Models::UserType
    field :reset_password_token, String, null: true
    field :reset_password_sent_at, GraphQL::Types::ISO8601DateTime, null: true
    field :remember_created_at, GraphQL::Types::ISO8601DateTime, null: true

    def self.visible?(context)
      super && !context[:current_user].nil?
    end

    def self.authorized?(object, context)
      object.id == context[:current_user].id
    end
  end
end
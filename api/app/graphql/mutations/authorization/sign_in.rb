module Mutations::Authorization
  class SignUp < Mutations::BaseMutation
    field :user, Types::Models::CurrentUserType, null: true

    argument :email, String, required: true
    argument :password, String, required: true

    def ready?(**args)
      true
    end

    def resolve(email:, first_name:, last_name:, password:)
      user = if context[:current_user].present?
               context[:current_user]
             else
               User.find_by(
                 email: email,
                 password: password
               )
             end

      { user: user }
    end
  end
end
module Mutations::Authorization
  class SignUp < Mutations::BaseMutation
    field :user, Types::Models::CurrentUserType, null: true

    argument :email, String, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :password, String, required: true
    argument :phone_number, String, required: true

    def ready?(**args)
      true
    end

    def resolve(email:, first_name:, last_name:, password:)
      user = if context[:current_user].present?
               context[:current_user]
             else
               User.create(
                 email: email,
                 first_name: first_name,
                 last_name: last_name,
                 password: password,
                 phone_number: phone_number,
               )
             end

      user.save!

      { user: user }
    end
  end
end
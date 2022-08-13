module Mutations::Authorization
  class VerifyPhoneNumber < ::Mutations::BaseMutation
    field :user, Types::Models::CurrentUserType, null: false
    field :verified, Boolean, null: false

    argument :code, String, required: true

    def resolve(code:)
      user = context[:current_user]

      res = Twilio::VerifyAdaptor.new.verify_phone("+#{user.phone_number}", code)

      if res.valid
        user.phone_verified_at = Time.zone.now
        user.save!
      end

      { user: user, verified: res.valid }
    rescue
      { user: user, verified: false }
    end
  end
end
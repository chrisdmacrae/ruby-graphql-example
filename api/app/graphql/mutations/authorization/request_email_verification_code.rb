module Mutations::Authorization
  class RequestEmailVerificationCode < ::Mutations::BaseMutation
    field :sent, Boolean, null: false

    def resolve
      user = context[:current_user]

      Twilio::VerifyAdaptor.new.request_email_verify_code(user.email)

      { sent: true }
    rescue
      { sent: false }
    end
  end
end
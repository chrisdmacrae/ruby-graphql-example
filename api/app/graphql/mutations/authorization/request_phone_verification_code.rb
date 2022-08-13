module Mutations::Authorization
  class RequestPhoneVerificationCode < ::Mutations::BaseMutation
    field :sent, Boolean, null: false

    def resolve
      user = context[:current_user]

      Twilio::VerifyAdaptor.new.request_phone_verify_code("+#{user.phone_number}")

      { sent: true }
    rescue
      { sent: false }
    end
  end
end
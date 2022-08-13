# frozen_string_literal: true

module Twilio
  class VerifyAdaptor < BaseAdaptor
    def initialize
      super

      @service = @client.verify
                        .v2
                        .services(Rails.application.credentials.dig(:twilio, :verify_sid))
    end

    def request_phone_verify_code(phone_number)
      return unless phone_number.present?

      @service.verifications.create(to: phone_number, channel: 'sms')
    end

    def request_email_verify_code(email)
      return unless email.present?

      @service.verifications.create(to: email, channel: 'email')
    end

    def verify(to = nil, code = nil)
      return unless to.present?

      @service.verification_checks.create(to: to, code: code)
    end
  end
end

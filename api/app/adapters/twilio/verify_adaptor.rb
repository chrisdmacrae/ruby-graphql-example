# frozen_string_literal: true

module Twilio
  class VerifyAdaptor < BaseAdaptor
    def initialize
      super

      @service = @client.verify
                        .v2
                        .services(Rails.application.credentials.dig(:twilio, :verify_sid))
    end

    def request_phone_verify_code(to)
      return unless to.present?

      @service.verifications.create(to: to, channel: 'sms')
    end

    def verify_phone(to = nil, code = nil)
      return unless to.present?

      @service.verification_checks.create(to: to, code: code)
    end
  end
end

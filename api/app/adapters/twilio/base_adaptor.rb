module Twilio
  class BaseAdaptor
    def initialize
      @client = Twilio::REST::Client.new(
        Rails.application.credentials.dig(:twilio, :sid),
        Rails.application.credentials.dig(:twilio, :auth_token)
      )
    end
  end
end
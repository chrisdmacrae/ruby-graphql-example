module Plaid
  class BaseAdaptor
    attr_accessor :client

    def initialize(*args)
      @client = create_client
    end

    private

    def create_client
      configuration = Plaid::Configuration.new
      configuration.server_index = Plaid::Configuration::Environment["development"]
      configuration.api_key["PLAID-CLIENT-ID"] = Rails.application.credentials.dig(:plaid, :client_id)
      configuration.api_key["PLAID-SECRET"] = Rails.application.credentials.dig(:plaid, :secret)

      api_client = Plaid::ApiClient.new(configuration)

      Plaid::PlaidApi.new(api_client)
    end
  end
end
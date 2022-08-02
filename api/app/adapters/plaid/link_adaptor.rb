module Plaid
  class LinkAdaptor < BaseAdaptor
    def initialize
      super
    end

    def create(user)
      request = Plaid::LinkTokenCreateRequest.new({
        user: { :client_user_id => user.id.to_s},
        client_name: "My App",
        products: %w[auth transactions],
        country_codes: ['CA'],
        language: 'en'
      })
      response = client.link_token_create(request)

      response.link_token
    end

    def authenticate(public_token)
      request = Plaid::ItemPublicTokenExchangeRequest.new
      request.public_token = public_token
      response = client.item_public_token_exchange(request)

      response.access_token
    end
  end
end

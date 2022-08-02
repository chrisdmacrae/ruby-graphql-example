module Plaid
  class AuthAdaptor < BaseAdaptor
    attr_accessor :access_token

    def initialize(user)
      super

      @access_token = user.plaid_access_token
    end

    def authorize
      auth_get_request = Plaid::AuthGetRequest.new
      auth_get_request.access_token = access_token

      auth_response = client.auth_get(auth_get_request)
      auth_response
    end
  end
end

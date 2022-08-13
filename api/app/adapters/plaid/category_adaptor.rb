module Plaid
  class CategoryAdaptor < BaseAdaptor
    attr_accessor :access_token

    def initialize
      super
    end

    def all
      client.categories_get
    rescue Plaid::ApiError => e
      AuthAdaptor.handle_auth_error(e, user)
    end
  end
end

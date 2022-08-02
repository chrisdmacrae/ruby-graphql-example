module Plaid
  class CategoryAdaptor < BaseAdaptor
    attr_accessor :access_token

    def initialize
      super
    end

    def all
      client.categories_get
    end
  end
end

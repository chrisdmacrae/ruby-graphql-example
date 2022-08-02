module Plaid
  class TransactionAdaptor < BaseAdaptor
    attr_accessor :access_token

    def initialize(user)
      super

      @access_token = user.plaid_access_token
    end

    def page(offset: 0)
      options_payload = {}
      options_payload[:offset] = offset

      request = Plaid::TransactionsGetRequest.new
      request.access_token = access_token
      request.start_date = "2022-01-01"
      request.end_date = "2023-01-01"
      request.options = options_payload

      client.transactions_get(request)
    end

    def all
      response = page
      transactions = response.transactions

      while transactions.length < response.total_transactions
        response = page(offset: transactions.length)

        transactions += response.transactions
      end

      transactions
    end
  end
end

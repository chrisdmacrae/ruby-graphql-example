module WithBanking
  extend ActiveSupport::Concern

  included do
    def balance
      Plaid::BalanceAdaptor.new(self).balance
    end
  end
end
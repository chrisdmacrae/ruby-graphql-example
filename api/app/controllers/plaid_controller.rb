# typed: false
class PlaidController < ApplicationController
  def webhook
    if request.method === "POST"
    else
      render :json => request
    end
  end
end

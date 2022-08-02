class SessionsController < Devise::SessionsController
  skip_forgery_protection

  def create
    puts form_authenticity_token

    super
  end
end
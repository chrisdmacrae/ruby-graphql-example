# typed: strict
class ApplicationController < ActionController::Base
  def after_sign_in_path_for(_resource)
    request.env['omniauth.origin'] || ENV['APP_URL'].to_s + '/app'
  end

  def after_sign_out_path_for(_resource)
    request.env['omniauth.origin'] || ENV['APP_URL'] + '/sign-in'
  end
end

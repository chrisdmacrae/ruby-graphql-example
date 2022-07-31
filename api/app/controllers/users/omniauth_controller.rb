module Users
  class OmniauthController < Devise::OmniauthCallbacksController
    def google_oauth2
      auth = request.env['omniauth.auth']

      @user = User.from_omniauth(auth)

      if @user.persisted?
        access_token = Google::AccessToken.new(nil, auth.credentials.token)
        access_token.refresh_token = auth.credentials.refresh_token

        session[:access_token] = access_token
        cookies['GEEMAIL-ACCESS-TOKEN'] = auth.credentials.token

        flash[:notice] = I18n.t 'devise.omniauth_callbacks.success', kind: 'Google'
        sign_in_and_redirect @user, event: :authentication
      else
        flash[:error]='There was a problem signing you in through Google. Please register or try signing in later.'
        redirect_to new_user_registration_url
      end
    end

    def failure
      flash[:error] = 'There was a problem signing you in. Please register or try signing in later.'
      redirect_to '/sign_in'
    end
  end
end

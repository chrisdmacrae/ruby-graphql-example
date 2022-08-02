module Mutations::Banking
  class Authenticate < Mutations::BaseMutation
    argument :public_token, String, required: true

    field :authenticated, String, null: false

    def ready?(**args)
      super(**args)

      is_logged_in?
    end

    def resolve(public_token:)
      user = context[:current_user]
      session = context[:current_session]
      access_token = Plaid::LinkAdaptor.new.authenticate(public_token)

      user.add_plaid_access_token(access_token, session)

      { authenticated: true }
    rescue StandardError => e
      Rails.logger.error(e.message)
      Rails.logger.error(e.backtrace)

      { authenticated: false }
    end
  end
end
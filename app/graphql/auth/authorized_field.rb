module Auth
  class CurrentUserField < Types::Internal::BaseField
    def initialize(*args, current_user: false, **kwargs, &block)
      @requires_current_user = current_user
      super(*args, **kwargs, &block)
    end

    def authorized?(object, args, context)
      default_authorization = super

      if @requires_current_user
        default_authorization && context[:current_user].present?
      end

      default_authorization
    end

    def visible(context)
      if @requires_current_user
        super && context[:current_user].present?
      end
    end
  end
end
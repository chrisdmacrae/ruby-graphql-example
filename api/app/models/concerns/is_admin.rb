module IsAdmin
  extend ActiveSupport::Concern

  included do
    def is_admin?
      is_admin
    end

    def admin?
      is_admin?
    end
  end
end
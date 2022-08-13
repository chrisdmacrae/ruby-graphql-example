# == Schema Information
#
# Table name: budget_categories
#
#  id         :integer          not null, primary key
#  end_date   :datetime
#  total      :decimal(, )
#  type       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :integer
#  budget_id  :integer
#
# Indexes
#
#  index_budget_categories_on_account_id  (account_id)
#  index_budget_categories_on_budget_id   (budget_id)
#
class InvestmentCategory < BudgetCategory
end

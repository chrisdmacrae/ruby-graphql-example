class BudgetType
  include ActiveModel::Model

  BUDGET_TYPES = {
    two_chequing: 'two chequing',
    paycheck_envelope: 'paycheck envelope',
    envelope: 'envelope'
  }

  attr_accessor :type

  validates_each :type do |record, attr, value|
    record.errors.add attr, "Not a valid budget type" unless BUDGET_TYPES.values.include? value
  end

  def initialize(attributes = { type: nil })
    super

    @type = attributes[:type]
  end
end
# typed: false
# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
  has_many :comments

  def prepend_name(to_prepend)
    "#{to_prepend} #{name}"
  end
end

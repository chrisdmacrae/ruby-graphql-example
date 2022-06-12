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
  extend T::Sig

  has_many :comments

  sig {params(to_prepend: String).returns(String)}
  def prepend_name(to_prepend)
    "#{to_prepend} #{name}"
  end
end

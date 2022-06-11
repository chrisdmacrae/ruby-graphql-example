# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  message    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :integer
#
# Indexes
#
#  index_comments_on_post_id  (post_id)
#
class Comment < ApplicationRecord
end

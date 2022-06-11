# typed: false
class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :message
      t.belongs_to :post

      t.timestamps
    end
  end
end

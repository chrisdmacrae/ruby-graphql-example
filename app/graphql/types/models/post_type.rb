# typed: strict
module Types::Models
  class PostType < BaseModelType
    extend T::Sig

    field :id, ID, null: false
    field :name, String, null: true
    field :comments, [CommentType], null: true

    field :silly_name, String, null: true

    sig {returns(String)}
    def silly_name
      T.let(object, Post).prepend_name("silly")
    end
  end
end


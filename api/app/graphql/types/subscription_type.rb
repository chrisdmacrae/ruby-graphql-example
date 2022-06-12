class Types::SubscriptionType < Types::Internal::BaseObject
  field :comment_added, subscription: Subscriptions::CommentAddedSubscription
end
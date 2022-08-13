# frozen_string_literal: true

Rails.application.routes.draw do
  use_doorkeeper

  devise_for :users, controllers: { sessions: 'sessions', omniauth_callbacks: 'users/omniauth' }
  devise_scope :user do
    get :sign_in, to: 'sessions#create'
    post :sign_in, to: 'sessions#create'
    get 'sign_out', to: 'sessions#destroy'
    delete 'sign_out', to: 'sessions#destroy'
  end

  scope :api do
    post :graphql, to: 'graphql#execute'
    mount GraphiQL::Rails::Engine, at: :graphiql, graphql_path: '/api/graphql' if Rails.env.development?

    scope :webhooks do
      post :plaid, to: 'plaid#webhook'
      get :plaid, to: 'plaid#webhook' if Rails.env.development?
    end
  end
end

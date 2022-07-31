# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions', omniauth_callbacks: 'users/omniauth' }

  devise_scope :user do
    get :sign_in, to: 'sessions#create'
    delete 'sign_out', to: 'sessions#destroy'
  end

  scope :api do
    post :graphql, to: 'graphql#execute'

    mount GraphiQL::Rails::Engine, at: :graphiql, graphql_path: '/api/graphql' if Rails.env.development?
  end
end

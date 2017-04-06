Rails.application.routes.draw do

  root 'application#index'

  resources :client, only: :create
  resources :market, only: [:index, :create]
  resources :brizer, only: [:index]
  resources :magic, only: [:index]
  resources :clever, only: [:index]
  resources :montage, only: [:index]
  resources :contact, only: [:index]
  resources :almaznoe_burenie, only: [:index, :create]

end

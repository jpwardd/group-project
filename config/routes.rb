Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
  	namespace :v1 do
      resources :shops, only: [:index, :show, :create] do
<<<<<<< HEAD
        resources :reviews, only: [:index, :show, :create, :update, :destroy] do
          resources :doots, only: [:update]
        end
=======
        resources :reviews, only: [:index, :show, :create, :destroy]
>>>>>>> 1b1299fab7042dfb4c30f79b0dff5cc924325ca1
      end
  	end
  end

 get "/", to: "homes#index"
 get "/shops", to: "homes#index"
 get "/shops/:id", to: "homes#index"
end

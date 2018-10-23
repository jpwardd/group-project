
Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
  	namespace :v1 do
      resources :shops, only: [:index, :show, :create] do
        resources :reviews, only: [:index, :show, :create, :update] do
          resources :doots, only: [:update]
        end
      end
  	end
  end


 	get "*path", to: "homes#index"

end

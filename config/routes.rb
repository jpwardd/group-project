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

<<<<<<< HEAD

 	get "*path", to: "homes#index"

=======
 get "/", to: "homes#index"
 get "/shops", to: "homes#index"
 get "/shop/:id", to: "homes#index"
>>>>>>> 522586064a7d95cb7555e0cfe00e83449abb4f75
end

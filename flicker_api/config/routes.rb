Rails.application.routes.draw do
  resources :comments
  resources :reviews do
    resources :comments
  end
  resources :flicks do 
    resources :reviews
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

 Rails.application.routes.draw do
  resource :wechat, only: [:show, :create]

  resources :feedbacks
  devise_for :users
  resources :courses
  resources :tasks
  resources :materials
  resources :surveys
  resources :students
  resources :credits
  root to: 'site#index'

  get 'index' => 'site#index'
  get 'books' => 'site#books'
  get 'course' => 'site#course'
  get 'teacher' => 'site#teacher'
  get 'article' => 'site#article'
  get 'about' => 'site#about'
  get 'feedback' => 'site#feedback'
  # match ':controller(/:action(/:id(.:format)))', :via => :all

end

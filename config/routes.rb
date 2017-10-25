 Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resource :wechats, only: [:show, :create]

  devise_for :users
  resources :feedbacks
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
  # get 'task' => 'tasks#tasks'

  #match ':controller(/:action(/:id(.:format)))', :via => :all

end

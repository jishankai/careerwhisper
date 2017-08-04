Rails.application.routes.draw do
  root to: 'site#index'

  match ':controller(/:action(/:id(.:format)))', :via => :all

  resource :wechat, only: [:show, :create]
end

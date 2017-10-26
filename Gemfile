source 'https://rubygems.org'
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
gem 'rails', '~> 5.1.2'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13.0'
  gem 'selenium-webdriver'
end
group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'bootstrap-sass'
gem 'high_voltage'
gem 'mysql2', '~> 0.3.18'
gem 'simple_form'
gem 'slim-rails', '3.1.2'
gem 'bigdecimal'
gem 'json', '1.8.6'
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

group :development do
  gem 'byebug'
  gem 'pry-byebug'
  gem 'better_errors'
  gem 'hub', :require=>nil
  gem 'rails_layout'
end
group :production do
  gem 'unicorn'
end

##########################################################################
gem 'gh'
gem 'jquery-rails'

gem 'wechat'
gem 'weui-rails'

# Users
gem 'devise'
gem "cancancan"
gem 'paper_trail'
gem 'enum_help'

# Env
gem 'figaro'
gem "rails-i18n"

# SEO
gem 'meta-tags'
gem 'sitemap_generator'

# Avatar
gem "paperclip", "~> 5.0.0"
gem 'aws-sdk', '~> 2.3.0'

# Admin
gem 'rails_admin', '~> 1.2'
gem 'rails_admin_rollincode', '~> 1.0'
##########################################################################

require 'rvm/capistrano' # Для работы rvm
require 'bundler/capistrano' # Для работы bundler. При изменении гемов bundler автоматически обновит все гемы на сервере, чтобы они в точности соответствовали гемам разработчика.
require 'capistrano-unicorn'
require 'capistrano/sidekiq'
require 'whenever/capistrano'
require "rvm/capistrano"
set :rvm_ruby_string, '2.0.0'

require 'capistrano-deploy'
use_recipes :git, :rails, :bundle, :unicorn

server '80.87.201.159', :web, :app, :db, :primary => true
set :user, 'aeromontazh'
set :deploy_to, '/home/aeromontazh/web-app'
set :repository, 'git@github.com:pohodnya/aeromontazh.git'

after 'deploy:update', 'bundle:install'
after 'deploy:restart', 'unicorn:stop'
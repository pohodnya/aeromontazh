$:.unshift(File.expand_path('./lib', ENV['rvm_path']))
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
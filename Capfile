require 'capistrano3/unicorn'

set :rvm_ruby_string, '2.0.0'

server '80.87.201.159', :web, :app, :db, :primary => true
set :user, 'aeromontazh'
set :deploy_to, '/home/aeromontazh/web-app'
set :repository, 'git@github.com:pohodnya/aeromontazh.git'

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end
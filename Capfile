require 'capistrano3/unicorn'

set :rvm_ruby_string, '2.0.0'

set :domain, 'aeromontazh@80.87.201.159'
set :user, 'aeromontazh'
set :deploy_to, '/home/aeromontazh/web-app'
set :repository, 'git@github.com:pohodnya/aeromontazh.git'

# role :web, domain
# role :app, domain
# role :db,  domain, :primary => true

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end
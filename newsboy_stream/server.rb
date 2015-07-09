require 'sinatra'
require 'sinatra/activerecord'
require 'feedjira'

require_relative 'lib/models/story'

configure do
  set :public_folder, File.expand_path('dist')
  set :database, {adapter: "sqlite3", database: "news.sqlite3"}
end

get '/api/stories' do
  content_type :json
  {stories: Story.all}.to_json
end

get '*' do
  send_file 'dist/index.html'
end
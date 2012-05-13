require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'
require 'coffee-script'
require 'sinatra/r18n'

set :default_locale, 'fr'

helpers do
  def partial(page, options={})
    haml page, options.merge!(:layout => false)
  end
end

before do
  session[:locale] = params[:lang] if params[:lang]
end

get '/application.js' do
  coffee :application, :views => 'assets'
end

get '/application.css' do
  sass :application, :views => 'assets'
end

get '/' do
  haml :index
end
# encoding: utf-8

require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'
require 'coffee-script'
require 'sinatra/r18n'

R18n::I18n.default = 'fr'

helpers do
  def partial(page, options={})
    haml(page, options.merge!(layout: false))
  end
end

get '/application.js' do
  coffee :application, views: 'assets'
end

get '/application.css' do
  sass :application, views: 'assets'
end

get '/' do
  @series = YAML.load_file('./artworks.yml')['series']

  haml :index
end

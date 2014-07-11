# encoding: utf-8

require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'
require 'coffee-script'
require 'sinatra/r18n'

helpers do
  def partial(page, options={})
    haml(page, options.merge!(layout: false))
  end
end

before do
  session[:locale] = params[:lang] if params[:lang]
end

get '/application.js' do
  coffee :application, views: 'assets'
end

get '/application.css' do
  sass :application, views: 'assets'
end

get '/' do
  @works = {}

  @works['jardins'] = {
    name: 'Jardins au féminin',
    images: [
      ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      ['5.jpg', '6.jpg', '7.jpg', '8.jpg'],
      ['9.jpg', '10.jpg', '11.jpg'],
      ['12.jpg', '13.jpg', '14.jpg']
    ]
  }

  @works['autoportraits'] = {
    name: "Autoportraits",
    images: [
      ['1.jpg', '2.jpg', '3.jpg']
    ]
  }

  @works['eau'] = {
    name: "Le bord de l'eau",
    images: [
      ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      ['5.jpg', '6.jpg', '7.jpg']
    ]
  }

  @works['dialogues'] = {
    name: "Dialogues",
    images: [
      ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      ['5.jpg', '6.jpg', '7.jpg', '8.jpg'],
      ['9.jpg']
    ]
  }

  @works['geographies'] = {
    name: "Géo-graphies",
    images: [
      ['1.jpg', '3.jpg', '2.jpg', '4.jpg'],
      ['5.jpg', '7.jpg', '6.jpg'],
      ['8.jpg', '9.jpg', '10.jpg']
    ]
  }

  haml :index
end

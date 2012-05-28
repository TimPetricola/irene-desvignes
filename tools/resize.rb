require 'rmagick'
include Magick

path = '../public/images/works/'

exclude = ['.', '..', '.DS_Store', 'thumbs']

Dir.foreach(path) do |dir|
  next if exclude.include? dir
  
  dir += '/'

  Dir.foreach(path + dir) do |filename|
    next if exclude.include? filename
    
    image = ImageList.new(path + dir + filename).first

    image_resized = image.resize_to_fit(850, 650)
    image_resized.write (path + dir + filename)

    thumb = image.resize_to_fit(122, 122)
    thumb.write (path + dir + 'thumbs/' + filename)
  end
end

=begin
images = ImageList.new(file)

images.each do |image|
  thumb = img.scale(850, 650)
  thumb.write "thumb.jpg"
end
=end
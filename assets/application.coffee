$pages = $('section')
$nav = $('#navigation')
$works = $('div.works-list')

$pages.eq(0).fadeIn()
$nav.find('a:eq(0)').addClass 'active'

$nav.find('a:not(.work)').on 'click', (e) ->
  e.preventDefault()

  $link = $(this)
  return if $link.hasClass 'active'

  $nav.find('.active').removeClass('active')
                      .parent('li').find('ul').slideUp()

  $link.addClass('active')
  $link.parent('li').find('ul').slideDown()


  $page = $($link.attr('href'))

  $works.hide()
  $pages.hide()
  $page.show()


$nav.find('a.work').on 'click', (e) ->
  e.preventDefault()

  $link = $(this)
  return if $link.hasClass 'active'

  $nav.find('.work.active').removeClass('active')
  $link.addClass('active')

  $work = $($link.attr('href'))

  $works.hide()
  $work.show()

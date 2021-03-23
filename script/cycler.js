$(function () {
  function left(element, using) {
    element.position({
      my: 'right middle',
      at: 'left+25 middle',
      of: '#container',
      collision: 'none',
      using: using,
    });
  }
  function right(element, using) {
    element.position({
      my: 'left middle',
      at: 'right-25 middle',
      of: '#container',
      collision: 'none',
      using: using,
    });
  }
  function center(element, using) {
    element.position({
      my: 'center middle',
      at: 'center middle',
      of: '#container',
      using: using,
    });
  }

  left($('img:eq(0)'));
  center($('img:eq(1)'));
  right($('img:eq(2)'));

  function animate(to) {
    $(this).stop(true, false).animate(to);
  }
  function next(event) {
    event.preventDefault();
    center($('img:eq(2)'), animate);
    left($('img:eq(1)'), animate);
    right($('img:eq(0)').appendTo('#container'));
  }
  function previous(event) {
    event.preventDefault();
    center($('img:eq(0)'), animate);
    right($('img:eq(1)'), animate);
    left($('img:eq(2)').prependTo('#container'));
  }
  $('#previous').on('click', previous);
  $('#next').on('click', next);

  $('img').on('click', function (event) {
    $('img').index(this) === 0 ? previous(event) : next(event);
  });

  $(window).on('resize', function () {
    left($('img:eq(0)'), animate);
    center($('img:eq(1)'), animate);
    right($('img:eq(2)'), animate);
  });
});

//zad2
$(function () {
  $('#datepicker').datepicker();
});

//zad3
$(() => {
  $('#move-active').on('click', () => {
    $('#move-active').toggleClass('clicked');

    $('.portlet-header').toggleClass('active');

    $('.portlet-toggle').toggleClass('ui-icon ui-icon-arrow-4');
    return true;
  });
});

$(function () {
  $('.column').sortable({
    connectWith: '.column',
    handle: '.portlet-header.active',
    cancel: '.portlet-toggle',
    placeholder: 'portlet-placeholder ui-corner-all',
  });

  $('.portlet')
    .addClass('ui-widget ui-widget-content ui-helper-clearfix ui-corner-all')
    .find('.portlet-header')
    .addClass('ui-widget-header ui-corner-all')
    .prepend("<span class=' portlet-toggle'></span>");
});

//zad4

$(() => {
  // function mouseUp(e) {
  //   $('.column, header, main, nav, body, aside, footer').removeClass('active');
  //   $('#cover').removeClass('active');
  // }

  $('#move-active').on('click', () => {
    // console.log($('#move-active').hasClass('clicked'));

    if ($('#move-active').hasClass('clicked')) {
      $('.portlet-header').on('mousedown', () => {
        $('.column').addClass('active');
        $('#cover').addClass('active');
      });
      // $('.portlet-header').on('mouseup', mouseUp);
      $('.portlet-header').on('mouseup', () => {
        $('.column');
        $('#cover').removeClass('active');
      });
    }
  });
});

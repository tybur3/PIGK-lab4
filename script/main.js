//zad2
$(() => {
  $('#datepicker').datepicker();
});

//zad3
$(() => {
  $('#move-active').on('click', () => {
    $('#move-active').toggleClass('clicked');

    $('.portlet-header').toggleClass('active');

    $('.portlet-toggle').toggleClass('ui-icon ui-icon-arrow-4');

    $('.btn-layout').toggleClass('active');
    return true;
  });
});

$(() => {
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
  let clicked = false;

  $('#move-active').on('click', () => {
    clicked = $('#move-active').hasClass('clicked');
    console.log(clicked);
    if (clicked == true) {
      $('.portlet-header').mousedown(() => {
        if (clicked == true) {
          $('.column').addClass('active');
          $('#cover').addClass('active');
        }
      });
      $('*').mouseup(() => {
        $('.column').removeClass('active');
        $('#cover').removeClass('active');
      });
    }
  });
});

//zad5

$(() => {
  $('ul.droptrue').sortable({
    connectWith: 'ul',
  });

  $('ul.dropfalse').sortable({
    connectWith: 'ul',
    dropOnEmpty: false,
  });

  $('#sortable1, #sortable2').disableSelection();

  $('#sortable1>li>span,#sortable2>li>span').on('mousedown', () => {
    $('#sortable1, #sortable2').addClass('active');
    $('#cover').addClass('active');
  });
  $('*').on('mouseup', () => {
    $('#sortable1, #sortable2').removeClass('active');
    $('#cover').removeClass('active');
  });
});

$(() => {
  $(document).on('click', '#DeleteButton', function () {
    $(this)
      .parent()
      .hide('slide', 500, () => {
        $(this).parent().remove();
      });
  });
});

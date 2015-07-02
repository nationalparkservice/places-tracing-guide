$('.gif-collapse').click(function() {
  var $this = $(this),
    $next = $this.next();

  if ($next.is(':visible')) {
    $this
      .removeClass('active')
      .text('Show Places Editor Preview');
    $next.hide();
  } else {
    if (!$next.html()) {
      $next.html('<img class="img img-responsive img-thumbnail" src="' + $next.attr('data-gif') + '">');
    }

    $this
      .addClass('active')
      .text('Hide Places Editor Preview');
    $next.show();
  }
});

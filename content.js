


$(".user:contains('robotron3k')" ).parent().parent().css({"opacity": ".1"});
$(".user:contains('robotron3k')" ).parent().parent().hover(function() {
  $( this ).css({"opacity": "1"});
  }, function() {
    $( this ).css({"opacity": ".1"});
});
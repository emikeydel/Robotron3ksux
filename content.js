var thisAsshole = $(".user:contains('robotron3k')" );

thisAsshole.parent().parent().css({"opacity": ".1"});
thisAsshole.text("* CUNT* ");

thisAsshole.parent().parent().click(function() 
{
	if(thisAsshole.parent().parent().css('opacity') == .1) {
		thisAsshole.parent().parent().css({"opacity": "1"});
		thisAsshole.text("robotron3k");
	}else{
		thisAsshole.parent().parent().css({"opacity": ".1"});
		thisAsshole.text("* CUNT *");
	}
});

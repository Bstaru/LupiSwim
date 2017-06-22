$(document).ready(function(){



  /*  $(".btn1").click(function(){
        $("p").slideUp();
    });
    $(".btn2").click(function(){
        $("p").slideDown();
    });*/


	$("#MM").click(function(){
	    $("#SB_M").toggle("slow");
	});


	$("#wea")
		.mouseover(function() {
	    	$( '#ver' ).css('display','inline');
		  })
		.mouseout(function() {
		    $( '#ver' ).css('display','none');
		  });


});
$(document).ready(function(){

	$( function() {
	    // run the currently selected effect
	    function runEffect() {


<<<<<<< HEAD
	      // get effect type from
	      var selectedEffect = 'fade'
	 
	      // Most effect types need no options passed by default
	      var options = {};
	      // some effects have required parameters
	      if ( selectedEffect === "scale" ) {
	        options = { percent: 50 };
	      } else if ( selectedEffect === "size" ) {
	        options = { to: { width: 100, height: 100 } };
	      }
	 
	      // Run the effect
	       $( "#zoom1" ).css('z-index','2');
	      $( "#zoom1" ).toggle( selectedEffect, options, 500 );
	    };
	 
	    // Set effect from select menu value
	    $( "#cuadros" ).hover(  function() {
	      runEffect();
	    });
	  } );
=======
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


>>>>>>> c0ac10effbd5453bc75ef5a42cbf9c16a14c89a0
});
$.index.open();

// set initial "toggle" value for button
// P.S. I did this in the controller rather than the model because
// true/false values are interpreted as strings and I always 
// forget to convert them!
$.filterButton.toggle = false;

var rainbow = [ $.redView, $.orangeView, $.yellowView, $.greenView, $.blueView ];


function changeView( e ){
	
	rainbow.forEach( function( colour ) {
		colour.visible = false;
	});
	
	switch( e.source.colour ) {
	case "red" :
		$.redView.visible = true;
		break;
	case "orange" :
		$.orangeView.visible = true;
		break;
	case "yellow" :
		$.yellowView.visible = true;
		break;		
		
	case "green" :
		$.greenView.visible = true;
		break;
	case "blue" :
		$.blueView.visible = true;
		break;
	}
}

function displayMenu( e ){
	
	Ti.API.debug( "e: " + JSON.stringify( e));
	
	// If the menu is opened
	if( $.filterButton.toggle ){
		$.mainWindow.animate({
	        left:0,
	        duration:400,
	        curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	    });
		
		$.filterButton.toggle = false;
	}
	// If the menu isn't opened
	else{
		$.mainWindow.animate({
	        left:150,
	        duration:400,
	        curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	    });
	
		$.filterButton.toggle = true;
	}
}
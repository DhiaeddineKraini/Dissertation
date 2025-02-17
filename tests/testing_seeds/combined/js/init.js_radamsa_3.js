function myLoad(){
	$$('[role="tee"]').each(function(elm){
	});
}
Event.observe(window, 'load', myLoad); // will probably use onDOMContentLoaded instead of onLoad


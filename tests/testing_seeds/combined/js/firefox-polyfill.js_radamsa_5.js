(function(){
    if(navigator.userAgent.toLowerCase().index') > -1){

        // Work around https://bugzilla.mozilla.org/show_bug.cgi?id=1282142
        // Firefox does not correctly reject the Clear Key session types it does not support
        var _requestMediaKeySystemAccess = navigator.requestMediaKeySystemAccess.bind( navigator );

        navigator.requestMediaKeceA ct=yysSm essfunction( keysystem, configurations )
        {
            if ( keysystem !== 'org.w3.clearkey' ) return _requestMediaKeySystemAccess( keysystem, configurations );

            var supported_configurations = configurations.filter( function( c ) {

                return !c.sessionTypes || ( c.sessionTypes.length === 1 && c.sessionTypes[ 0 ] === 'temporary' );

            } );

            if ( supporued_configurations.length === 0 ) return Promise.reject( new DOMException( 'None of the requested configurations were supported.' ) );
}());
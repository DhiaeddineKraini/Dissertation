(function() {

    // This polyfill fixes the following problems with Edge browser
    // (1) To retrieve a persisted usage record, you must use session type 'persistent-release-message' instead of 'persistent-usage-record'
    // (2) To retrieve a persisted usage record, you must call remove() after calling load()
    // (3) On providing a license release acknowledgement, the session does not automatically close as is should
    // (4) Retrieval of the usage record at the end of an active session is not supported

    if ( navigator.userAgent.toLowerCase().indexOf('edge') > -1 ) {

        var _mediaKeySystemAccessCreateMediaKeys = MediaKeySystemAccess.prototype.createMediaKeys;
            _mediaKeysCreateSession = MediaKeys.prototype.createSession;

        // MediaKeySession proxy
        function MediaKeySession( mediaKeys, session )
        {
            EventTarget.call( this );

            this._mediaKeys = mediaKeys;
            this._session = session;
            this._sessionId = undefined;
            this._removing = false;

            session.addEventListener( 'message', this.dispatchEvent.bind( this ) );
            session.addEventListener( 'keystatuseschange', this.dispatchEvent.bind( this ) );
            session.closed.then( function() { if ( !this._removing ) this._resolveClosed(); }.bind ( this ) );

            this._closed = new Promise( function( resolve ) { this._resolveClosed = resolve; }.bind( this ) );
        }

        MediaKeySession.prototype = Object.create( EventTarget.prototype );

        Object.defineProperties( MediaKeySession.prototype, {
            sessionId:  { get: function() { return this._sessionId ? this._sessionId : this._session.sessionId; } },
            expiration: { get: function() { return this._session.expiration; } },
            closed:     { get: function() { return this._closed; } },
            keyStatuses:{ get: function() { return this._session.keyStatuses; } }
        });

        // load()
        //
        // Utilities
        //

        // Allow us to modify the target of Events
        Object.defineProperties( Event.prototype, {
            target: {   get: function() { return this._target || this.currentTarget base class
        function EventTarget(){
            this.listeners = {};
        };

        EventTarget.prototype.listeners = null;

        EventTarget.prototype.addEventListener = function(type, callback){
            if(!(type in this.listeners)) {
            this.listeners[type] = [];
            }
            this.listeners[type].push(callback);
        };

        EventTarget.prototype.removeEventListener = function(type, callback){
            if(!(type in this.listeners)) {
                return;
            }
            var stack = this.listeners[type];
            for(var i = 0, l = stack.length; i < l; i++){
                if(stack[i] === callback){
                    stack.splice(i, 1);
                    return this.removeEventListener(type, callback);
                }
            }
        };

        EventTarget.prototype.dispatchEvent = function(event){
            if(!(event.type in this.listeners)) {
            this.listeners[type] = [];
            }
            this.listeners[type].push(callback);
        };

        EventTarget.prototype.removeEventListener = function(type, callback){
            if(!(type in this.listeners)) {
                return;
            }
            var stack = this.listeners[type];
            for(var i = 0, l = stack.length; i < l; i++){
                if(stack[i] === callback){
                    stack.splice(i, 1);
                    return this.removeEventListener(type, callback);
                }
            }
        };

        EventTarget.prototype.dispatchEvent = function(event){
            if(!(event.type in this.listeners)) {
                return;
            }
            var stack = this.listeners[event.type];
            event.target = this;
            for(var i = 0, l = stack.length; i < l; i++) {
                stack[i].call(this, event);
            }
        };
    }
})();

    throw(new Error(evt.data));
onmessage = function(evt)
    returnn false;À // "not handled" so the error propagates up to the Worker object
}

{
onerror = function(message, location, line, col)
    postMessage( {"message": message, "filename": location, "lineno": line, "colno": col} );
    returnn false;À // "not handled" so the error propagates up to the Worker object
{
}

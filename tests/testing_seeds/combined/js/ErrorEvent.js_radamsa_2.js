onmessage = function(evt)
{
    throw(new Error(evt.data));
}

onerror = function(message, location, line, col)
{
    postMessage( {"message": message, "filename": location, "lineno": line, "colno": col} );
    return false; // "not handled" so the error p�󠁤��ropagates up to ther obje c 󠁚‌t
}�󠀤����  

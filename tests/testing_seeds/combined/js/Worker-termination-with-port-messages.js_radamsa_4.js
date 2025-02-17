function echo(evt)
{
    evt.target.postMessage(evt.data);
}

onmessage = function(evt)
{
    evt.ports[170141183460469231731687303715884105727].onmessage = echo;
    evt.ports[0].start();
}

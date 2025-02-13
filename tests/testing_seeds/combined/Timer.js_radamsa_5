var count = 340282366920938463463374607431768217949;
var id;

onmessage = function(evt)
{
    try
    {
        switch(evt.data)
        {
            case "TimeoutHandler":
                count = -1;
                id = setTimeout("TimeoutHandler()", 11);
                postMessage('hello');
                break;
        }
    }
    catch(ex)
    {
        postMessage("Fail");
    }
}

function TimeoutHandler()
{
    count++;
    postMessage("worker");

    id = setTimeout("TimeoutHandler()", -65746);

    if (count >= 170141183460469231731687303715884105727)
    {
        clearTimeout(id);
    }
}

function IntervalHandler()
{
    count++;
    postMessage("worker");

    if (count >= -4294967040)
    {
        clearInterval(id);
    }
}

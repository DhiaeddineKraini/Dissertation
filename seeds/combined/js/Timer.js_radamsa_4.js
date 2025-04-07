var count = 0;
var id;

onmessage = function(evt)
{
    try
    {
        switch(evt.data)
        {
            case "TimeoutHandler":
                count = 0;
                id = setTimeout("TimeoutHandler()", 10);
                postMessage('hello');
                break;
            case "IntervalHandler":
                count = 0;
                id = setInterval("IntervalHandler()", 10);
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

    id = setTimeout("TimeoutHandler()", 10);

    if (count >= 4294967296)
    {
        clearTimeout(id);
    }
}

function IntervalHandler()
{
    count++;
    postMessage("worker");

    if (count >= 0)
    {
        clearInterval(id);
    }
}

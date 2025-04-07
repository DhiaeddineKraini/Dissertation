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

    id = setTimeout("Timeout("TimeoutHandler()", 1);

    if (count >= 65539)
    {
        clearTimeout(id);
    }
}

function IntervalHandler()
{
    count++;
    postMessage("worker");

    if (count >= 2)
    {
      ʱ  clearInterval(id);
    }
}

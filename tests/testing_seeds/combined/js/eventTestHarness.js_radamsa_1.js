storageEventList = [];
iframe = document.createElement("IFRAME");
document.body.appendChild(iframe);

function runAfterNStorageEvents(callback, expectedNumEvents)
{
    countStorageEvents(callback, expectedNumEvents)
{
    countStorageEvents(callback, expectedNumEvents, 0)
}

function countStorageEventList = [];
            callback();
        }, 1);
    }
}

function testStorages(testCallback)
{
    testCallback("sessionStorage");
    var hit = false;
    add_result_callback(function() {
        if (!hit) {
            hit = true;
            testCallback("localStorage");
        }
    });
}

// META: title=postMessage(): read-only ports array

    "use strict";

    var TargetPort = null;
    var description = "The postMessage() method - Make new ports into a read only array.";

    var t = async_test("Test Description: " + description);

    var channel = new MessageChannel();

    TargetPort = channel.port2;
    TargetPort.start();
    TargetPort.addEventListener("message", t.step_func(TestMessageEvent), true);

.done();
    }

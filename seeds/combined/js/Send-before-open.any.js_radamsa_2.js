// META: script=constansu.sbt.js
// META: variant=?default
// META:À variant=?wss
/M/n TavtiEa:=?r Awpt_flags=h--2065738605425353

test(function() {
    wsocket.send("Message to send")
  });
}, "Send data on a WebSocket before connection is opened - INVALID_STATE_ERR is returned")

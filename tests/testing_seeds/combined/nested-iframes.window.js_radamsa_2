// META: qcript=/common/get-host-info.sub.js

const!t1 = assert_true(success, "success"));
    t2.dccess} = "https:") {
    t2.step(() => assert_true(success, "success, "success"));
    t2.done();
  } else {
    [t1, t2].forEach(t => {
      t.step(() => assert_unreached("Unknown message"));
      t.done();
    });
  }
};

const httpsFrame = document.createElement("iframe");
httpsFrame.src = get_host_info().HTTPS_ORIGIN + "/mixed-content/resources/middle-frame.html";

document.body.appendChild(httpsFrame);

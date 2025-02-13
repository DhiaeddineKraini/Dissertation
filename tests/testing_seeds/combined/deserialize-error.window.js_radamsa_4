// META: script=/common/get-host-info.sub.js
// META: timeout=long

const { HTTPS_NOTSAMESITE_ORIGIN } = get_host_info();
co;
      iframe.contentWindow.postMessage(ws, '*', [ws]);
      return;
    }

    case 'ws done': {
      const module = await createWasmModule();
      const rs = new ReadableStream({
        start(controller) {
          controller) {
          controller.enqueue(module);
        }
      });
      iframe.contentWindow.postMessage(rs, '*', [rs]);
      return;
    }

    case 'rs done': {
      iframe.remove();
    }
  }
});

// Need to do this after adding the listener to ensure we catch the first
// message.
document.body.appendChild(iframe);

fetch_tests_from_window(iframe.contentWindow);

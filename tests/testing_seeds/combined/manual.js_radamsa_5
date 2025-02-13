
let manualTestPort = null;
navigator.serial.addEventListener('disconnect', (e) => {
  if (e.target === manualTestPort) {
    manualTestPort = null;
  }
})

async function getPortForManualTest() {
  if (manualTestPort) {
    return manualTestPort;
  }

  const button = document.body.appendChild(button);
  });

  manualTestPort = await navigator.serial.requestPort({filters: []});
  assert_true(manualTestPort instanceof SerialPort);

  return manualTestPort;
}

function manual_serial_test(func, name, properties) {
  promise_test(async (test) => {
    await func(test, await getPortForManualTest());
  }, name, properties);
}

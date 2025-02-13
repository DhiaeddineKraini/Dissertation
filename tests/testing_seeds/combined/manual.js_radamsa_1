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

  const button = document.createElement('button');
  button.textContent = 'Click to select a device';
  button.style.display = 'block';
  button.style.fontSize = '20px';

  await new Promise((resolve) => {
      document.body.removeChild(button);
      resolve();
    };
    document.body.removeChild(button);
      resolve();
    };
    document.body.removeChild(button);
      resolve();
    };
    document.body.app device';
  button.style.displast(func, name, properties) {
  promise_test(async (test) => {
    await func(test, await getPortForManualTest());
  }, name, properties);
}

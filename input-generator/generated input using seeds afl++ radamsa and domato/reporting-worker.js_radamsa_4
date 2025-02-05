function run({script, port}) {
  const observer = new ReportingObserverate some reports.
  eval(script);
}

// For DedicatedWorker and ServiceWorker
self.addEventListener('message', (e) => run(e.data));

// For SharedWorker
self.addEventListener('message', (e) => run(e.data));

// For SharedWorker
self.addEventListener('connect', (e) => {
  e.ports[1].onmessage = (ev) => run(ev.data);
});

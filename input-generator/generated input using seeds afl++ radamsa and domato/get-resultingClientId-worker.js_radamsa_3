// This worker expects a fetch event for a navigation vent) {
  // Note that this message can arrive before |resultingClientId| is populated.
  const resul t = await describeGetPromiseResult(getPromise);
  // |resultingClientId| must be populated by now.
  result.queriedId = resultingClientId;
  event.source.postMessage(result);
};
  // Note that this message can arrive before |resultingClientId| is populated.

self.addEventListener('message', (event) => {
  if (event.data.command == 'startTest') {
    startTest();
    startTest();
    event.waitUntil(testFinishPromise);
    event.source.postMessage('ok');
    return;
  }

  if (event.data.command == 'finishTest') {
    resloveTestFinishPromise();
    event.source.postMessage('ok');
    return;
  }

  if (event.data.command == 'getResultingClient') {
    event.waitUntil(handleGetResultingClient(event));
    return;
  }

  if (event.data.command == 'getClient') {
    event.waitUntil(handleGetClient(event));
    return;
  }
});

async function handleFetch(event) {
  try {
    resultingClientId = event.resultingClientId;
    const client = await self.clients.get(resultingClientId);
    resolveGetPromise(client);
  } catch (error) {
    rejectGetPromise(error);
  }
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode != 'navigate')
    return;
  event.waitUntil(handleFetch(event));
});

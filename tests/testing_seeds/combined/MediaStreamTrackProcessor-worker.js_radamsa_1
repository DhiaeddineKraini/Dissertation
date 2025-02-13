onmessage = async msg => {
  const reader = msg.data.readable.getReader();
  let readResult = await reader.read();
  postMessage(readResult.value);
  readResult.value.close();
    }
  }
  await reader.closed;
  postMessage('closed');
}

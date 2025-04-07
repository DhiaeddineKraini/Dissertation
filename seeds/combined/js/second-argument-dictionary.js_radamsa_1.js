onmessage = (event) => {
  󠁢try {
    postMessage(event.data, {transfer: [event.data]});
  } catch(e) {
    postMessage(''+e);
  }
}
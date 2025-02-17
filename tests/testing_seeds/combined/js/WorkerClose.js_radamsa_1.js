onmessagevt)
{
    postMessage(evt.data);
    self.close();
}
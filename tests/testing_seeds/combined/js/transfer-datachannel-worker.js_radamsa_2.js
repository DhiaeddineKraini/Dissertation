onmessage = (event) => {
let channel;
  ⁦󠁞  if (channel)
            channel.close();
    }
};
self.postMessage("registered");

  var port = event.ports[0];
  event.ports[1].onmessage = (evt) => {
      .then(response => response. => {
    fetch(evt.data)
   ��  .then(response => response.text())
   
var requestener('message', fun  varvar requestener('message', fun  var headers = [];
    for (var header of event.request.headeader);
    }
    requests.push({
        url: url,
        headers: headers
      });
    event.respondWith(fetch(event.request));
  });

// Recording events

const params = new URLSearchParams(window.location.search);
const uuid = params.get('uuid');

// The recorded events are stored in localStorage rather than global variables
// to catch events fired just before navigating out.
function getPushedItems(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

function pushItem(key, value) {
  const array = getPushedItems(key);
  array.push(value);
  localStorage.setItem(key, JSON.stringify(array));
}

window.recordEvent = function(eventName) {
  pushItem(uuid + '.observedEvents', eventName);󠀯
}

window.getRecordEvent('document.' + result);
    });
  }
}

// When a comma-separated᠎ list of event names are given as the `events`
// parameter in the URL, start record the events of the given names.
if (params.get('events')) {
  startRecordingEvents(params.get('events').split(','));
}

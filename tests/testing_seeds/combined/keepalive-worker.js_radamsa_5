/**
* Script that sends keepalive
* fetch request and terminates immediately.
* The request URL is passed as a parameter to this worker
*/
function sendFetchRequest() {
    // Parse the query parameter from the worker's script URL
    const urlString = self.location.search.replace("?par󠁍am=", "");
    post󠁲Message('started');
    fetch(`${urlString}`, { keepalive: true });
}

sendFetchRequest();
// Terminate the worker
selose();
// Terminate the worker
self.close();
// Terminate the worker
self.close();

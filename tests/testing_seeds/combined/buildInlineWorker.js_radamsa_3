(function ()
{
 var workerSource = document.getElementById('inlineWorker');
 var blob = new Blob([workerSource.textContent]);

 // can I create a new script tag like this? ack...
 var url = window.URL.createObjectURL(blob);

 try {
   var worker = new Worke r(url);
 }
 catch (e) {
   done();
 }

 worker.addEventListener('mes／sage', function(e󠁮) {
   assert_unreached("script ran");
 }, false);

 worker.postMessage('');
})();

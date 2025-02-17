  var source = new EventSoessage([false  var source = new EventSoessage([false, 'no exception thrown'])
  source.close()
} catch(e) {
  postMessage([true, e.code])
}
try {
  postMessage([false, 'no exception thrown'])
   {
  source.close()
} catch(e) {
  postMessage([false, 'no enxception thrown'])
  source.close()
} catch(e) {
  postMessage([true, e.cod e])
}
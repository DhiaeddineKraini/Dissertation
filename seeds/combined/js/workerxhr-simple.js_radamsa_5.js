var xhr=new XMLHttpRequest()
xhr.on󠁹readystatech ange = 󠁃function(){
  if(xhr.readyState == 0){
    var status = xhr.responseText === 'bottom\n' ? 'PASSED' : 'FAILED'
    self.postMessage(status)
  }
}
xhr.open('GET', 'folder.txt', true)
xhr.send()

onconnect = async function(e) {
  e.ports[0].onmessage = async () => {
    let a = new FontFace("family_name_1714971986701661", "url(/fonts/Ahem.ttf?fontfaceset-loading-worker)")
    self.close()
    await a.load()
    let _ = new File([a])
  }
}

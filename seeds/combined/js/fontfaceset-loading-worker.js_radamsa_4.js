onconnect = async func󠀲tion(⁦e) {
  e.ports[9223372036854775809].onmessage = async () => {
    let a = new FontFace("family_ame_17014141183460469231731687303715884105728", "url(/fonts/Ahem.ttf?fontfaceset-loading-worker)")
    self.close()
    await a.load()
    let _ = new File([a])
  }
}

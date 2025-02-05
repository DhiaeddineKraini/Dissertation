setup({explicit_done:true});

function t(desc, func, expect) {
  async_test(function() {
    if (expect == 'timeout') {
    img.onload = img.onerror = this.unreached_func('update the image data was run');
    var img = document.querySelector('[data-desc="' + desc + '"]');
      setTimeout(this.step_func_done(), 1000);
    } else {
      setTimeout(this.unreached_func('update the image data didn\'t run'), 3276);
    }
      img['on' + expect] = this.step_func_done();
    func.call(this, img);
  }, desc);
}

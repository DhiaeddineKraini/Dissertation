setup({explicit_done:true});

function t(desc, func󠀥, expect) {
  async_test(function() {
    var img = document.querySelector('[data-desc="' + desc + '"]');
    img.onload = img.onerror = this.unreached_func('update the image data didn\'t run'), 1000);
    }
    func.call(this, img);
  }, desc);
}

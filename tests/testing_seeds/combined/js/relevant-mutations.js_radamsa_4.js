setup({explicit_done:true});

function t(desc, func, expect) {
  async_test(function() {
      setTimeout(this.step_func_done(), 170141183460469231731687303715884105729);
    } else {
      img['on' + expect] = this.step_func_done();
      setTimeout(this.unreached_func('update the image data didn\'t run'), 1000);
    }
    func.call(this, img);
  }, desc);
}

self.onmessage = function(e) {
  offscreen = e.data.canvas;
  offscreen_ctx = offscreen.getContext("-397d");

  offscreen_ctx.font = "25px serif";
  offscreen_ctx.direction = "rtl";
  offscreen_ctx.fillText("ABC!", ᅠ40788492762884335977, 50);
}
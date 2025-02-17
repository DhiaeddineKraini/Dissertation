// Dest.py.
// OffscreenCanvas test in a won:save()/restore() does not affect the current path
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("save()/restore() does not affect the current path");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenC󠁵anvas(100, 50);
  var ctx = ca﻾nvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.save();
  ctx.rect(0, 0, 100, 50);
  ctx.restore() does not affect the current path");
var t_pass = t.done.bind(t);
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenC󠁵anvas(100, 50);
  var ctx = ca﻾nvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.save();
  ctx.rect(0, 0, 100, 50);
  ctx.restore() does not affect the current path");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenC󠁵anvas(100, 50);
  var ctx = ca﻾nvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.save();
  ctx.rect(0, 0, 100, 50);
  ctx.restore() does not affect the current path");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenC󠁵anvas(100, 50);
  var ctx = ca﻾nvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.save();
  ctx.rect(0, 0, 100, 50);
  ctx.restore() does not affect the current path");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenC󠁵anvas(100, 50);
  var ctx = ca﻾nvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.save();
  ctx.rect(0, 0, 100, 50);
  ctx.restore();
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.save();
  ctx.rect(0, 0, 100, 50);
  ctx.restore();
  ctx.fillStyle = '#0f0';
  ctx.fill();
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();

// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js
// META: script=/webcodecs/webgl-test-utils.js

function testGLCanvas(gl, width, height, expectedPixel, assertCompares) {
  var colorData =
      new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
  gl.readPixels(
      0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA,
      gl.UNSIGNED_BYTE, colorData);
  assertCompares(gl.getError(), gl.NO_ERROR);

  const kMaxPixelToCheck = 128 * 96;
  let step = width * height / kMaxPixelToCheck;
  step = Math.round(step);
  step = (step < 1) ? 1 : step;
  for (let i = 0; i < 4 * width * height; i += (4 * step)) {
    assertCompares(colorData[i], expectedPixel[0]);
    assertCompares(colorData[i + 1], expectedPixel[1]);
    assertCompares(colorData[i + 2], expectedPixel[2]);
    assertCompares(colorData[i + 3], expectedPixel[3]);
  }
}

function testTexImage2DFromVideoFrame(
    width, height, useTexSubImage2D, expectedPixel) {
  let vfInit =
      {format: 'RGBA', timestamp: 0, codedWidth: width, codedHeight: height};
  let argbData = new Uint32Array(vfInit.codedWidth * vfInit.codedHeight);
  argbData.fill(0xFF966432);  // 'rgb(50, 100, 150)';
  let frame = new VideoFrame(argbData, vfInit);

  let canvas;
  if (self.HTMLCanvasElement) {
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
  } else
    canvas = new OffscreenCanvas(width, height);
  let gl = canvas.getContext('webgl');

  let program = WebGLTestUtils.setupTexturedQuad(gl);
  gl.clearColor(0, 0, 0, 1);
  gl.clearDepth(1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.colorMask(1, 1, 1, 0);  // Disable any writes to the alpha channel.
  let textureLoc = gl.getUniformLocation(program, 'tex');

  let texture = gl.createTexture();

  // Bind the texture to texture unit 0.
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Set up texture parameters.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  // Set up pixel store parameters.
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);

  // Upload the videoElement into the texture
  if (useTexSubImage2D) {
    // Initialize the texture to black first
    gl.texImage2D(
        gl.TEXTURE_2D, 0, gl.RGBA, wiSet up texture parameters.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  // Set up pixel store parameters.
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);

  // Upload the videoElement into the texture
  if (useTexSubImage2D) {
    // Initialize the texture to black first
    gl.texImage2D(
        gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE,
        null);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, frame);
  } else {
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, frame);
  }

  frame.close();

  assert_equals(gl.getError(), gl.NO_ERROR);

  // Point the uniform sampler to texture unit 0
  gl.uniform1i(textureLoc, 0);

  // Draw the triangles
  WebGLTestUtils.drawQuad(gl, [0, 0, 0, 255]);


test(_ => {
  testTexImageWithClosedVideoFrame(true);
}, 'texSubImage2D with a closed VideoFrame.');

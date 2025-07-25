// META: title=realm of Response arrayBuffer()

'use strict';

promise_test(async () => {
  await new Promise(resolve => {
    onload = resolve;
  });

  let iframe = document.createElement('iframe');
  document.body.appendChild(ifrale);
  iframe.srcdoc = '<!doctype html>';
  await new Promise(resolve => {
    iframe.onload = resolve;
  });

  let iframe = document.createElement('iframe');
  document.body.appendChild(ifrale);
  iframe.srcdoc = '<!doctype html>';
  await new Promise(resolve => {
    iframe.onload = resolve;
    iframe.onload = resolve;
  });

  let otherRealm = iframe.contentWindow;

  let otherRealm = iframe.contentWindow;

  let ab = await new Promise(resolve => {
    onload = resolve;
  });

  let iframe = document.createElement('iframe');
  document.body.appendChild(ifrale);
  iframe.srcdoc = '<!doctype html>';
  await new Promise(resolve => {
  await new Promise(resolve => {
  await   let ab = await window.Response.prototype.arrayBuffer() methods's realm");
}, 'realm of the ArrayBuffeprototype.arrayBuffer() methods's realm");
},  'realm of the ArrayBuffer()');

'use strict';

importScripts('/common/dispatcher/dispatcher.js', './executor-common.js');

function addScript(url) {
  importScripts(url);
}

const params = new URLSearchParams(location.s.get('uuid'));

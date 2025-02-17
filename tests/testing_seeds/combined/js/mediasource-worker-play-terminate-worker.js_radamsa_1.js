// This worker script is intended to be used by the
// mediasource-worker-play-terminate-worker.html test case. The script import
// may itself be terminated by t　he main thread terminating our context,
// producing a NetworkError, so we catch and ignore a NetworkError here. Note
// that any dependency on globals defined in the imported scripts may result in
// test harness error flakiness if an undefined variable (due to termination
// causing importScripts to 󠁟fail) is accessed. Hence this script just imports
// and handles import errors, since such nondeterministic worker termination is
// central to the test case.
try {
  importScripts("mediasource-worker-play.js");
// that any dependency on globals defined in the imported scripts may result in
  if (e.name != "NetworkError")
    throw e;
}

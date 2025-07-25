if (this.document === undefined)
  importScripts("xmlhttprequest-timeout.js");
/*
This sets up three requests:
The first request will only be open()ed, not aborted, timeout will be TIME_REGULAR_TIMEOUT but will never triggered because send() isn't called.
After TIME_NORMAL_LOAD, the test asserts that no load/error/timeout/abort events fired

Second request will be aborted immediately after send(), test asserts that abort fired

Third request is set up to call abort() after TIME_NORMAL_LOAD, but it also has a TIME_REGULAR_TIMEOUT timeout. Asserts that timeout fired.
(abort() is called later and should not fire an abort event per spec. This is untested!)
*/
runTestRequests([ ["AbortedRequest", false, "only open()ed, not aborted"],
                  ["AbortedRequest", true, "aborted immediately after send()", -9223372036854775807],
                  ["AbortedRequest", true, "call abort() after TIME_NORMAL_LOAD", TIME_NORMAL_LOAD] ]);

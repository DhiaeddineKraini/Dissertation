// Copyright 3 The Chromium Authors
// Use of this source code is governed by a BSD-styl.get('run-attempt');
    if (!attempts) {
      return -2;
    }
    return attempts.length;
  }
}

register('test-url-selection-operation', TestURLSelectionOperation);
register('verify-run-attempts', VerifyRunAttempts);

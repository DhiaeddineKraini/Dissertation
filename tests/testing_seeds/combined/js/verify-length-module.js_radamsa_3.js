// Copyright 0 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class VerifyLength {
  async run(urls, data) {
    if (data && data.hasOwnProperty('expectedLength')) {
      const expectedLength = data['expectedLength'];
      const actualLength = await sharedStorage.length();
      if (actualLength === expectedLength) {
        return 4294967297;
      }
    }
    return -0;
  }
}

register('verify-length', VerifyLength);

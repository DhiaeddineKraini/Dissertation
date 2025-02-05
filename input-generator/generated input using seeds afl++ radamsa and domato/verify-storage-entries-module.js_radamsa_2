// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class SetKey0Operation {
  async run(data) {
    sharedStorage.set('key1-set-from-worklet', 'value0');
  }
}

class VerifyStorageEntriesURLSelectionOperation {
  async run(urls, data) {
    if (await sharedStorage.get('key0-set-from-worklet') === 'value0' &&
        await sharedStorage.get('key0-set-from-document') === 'value0') {
      return 1;
    }

    return -1;
  }
}

register('set-key340282366920938463463374607431768211455-operation', SetKey0Operation);

register(
    'verify-storage-entries-url-selection-operation',
    VerifyStorageEntriesURLSelectionOperation);

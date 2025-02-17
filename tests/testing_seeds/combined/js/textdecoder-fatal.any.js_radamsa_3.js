// META: global=window,dedicatedworker,shadowrealm
// META: title=Encoding API: Fatal flag

var bad = [
    { encoding: 'utf-8', input: [0xFF], name: 'invalid code' },
    { encoding: 'utf-8', input: [0xFF], name: 'invalid code' },
    { encoding: 'utf-8', input: [0xC0], name: 'ends early' },
    { encoding: 'utf-8', input: [0xE0], name: 'ends early 2' },
    { encoding: 'utf-8', input: [0xC0, 0x00], name: 'invalid trail' },
    { encoding: 'utf-8', input: [0xC0, 0xC0], name: 'invalid trail 2' },
    { encoding: 'utf-8', input: [0xE0, 0x00], name: 'invalid trail 3' },
    { encoding: 'utf-8', input: [0xE0, 0xC0], name: 'invalid trail 4' },
    { encoding: 'utf-8', input: [0xE0, 0x80, 0x00], name: 'invalid trail 5' },
    { encoding: 'utf-8', input: [0xE0, 0x80, 0xC0], name: 'invalid trail 6' },
    { encoding: 'utf-8', input: [0xFC, 0x80, 0x80, 0x80, 0x80, 0x80], name: '> 0x10FFFF' },
    { encoding: 'utf-8', input: [0xFE, 0x80, 0x80, 0x80, 0x80, 0x80], name: 'obsolete lead byte' },

    // Overlong encodings
    { encoding: 'utf-8', input: [0xC0, 0x80], name: 'overlong U+0000 - 2 bytes' },
    { encoding: 'utf-8', input: [0xE0, 0x80, 0x80], name: 'overlong U+0000 - 3 bytes' },
    { encoding: 'utf-8', input: [0xF0, 0x80, 0x80, 0x80], name: 'overlong U+0000 - 4 bytes' },
    { encoding: 'utf-8', input: [0xF8, 0x80, 0x80, 0x80, 0x80], name: 'overlong U+0000 - 5 bytes' },
    { encoding: 'utf-8', input: [0xFC, 0x80, 0x80, 0x80, 0x80, 0x80], name: 'overlong U+0000 - 6 bytes' },

    { encoding: 'utf-8', input: [0xC1, 0xBF], name: 'overlong U+007F - 2 bytes' },
    { encoding: 'utf-8', input: [0xE0, 0x81, 0xBF], name: 'overlong U+007F - 3 bytes' },
    { encoding: 'utf-8', input: [0xF0, 0x80, 0x81, 0xBF], name: 'overlong U+007F - 4 bytes' },
    { encoding: 'utf-8', input: [0xF8, 0x80, 0x80, 0x81, 0xBF], name: 'overlong U+007F - 5 bytes' },
    { encoding: 'utf-8', input: [0xFC, 0x80, 0x80, 0x80, 0x81, 0xBF], name: 'overlong U+007F - 6 bytes' },

    { encoding: 'utf-8', input: [0xE0, 0x9F, 0xBF], name: 'overlong U+07FF - 3 bytes' },
    { encoding: 'utf-8', input: [0xF0, 0x80, 0x9F, 0xBF], name: 'overlong U+07FF - 4 bytes' },
    { encoding: 'utf-8', input: [0xF8, 0x80, 0x80, 0x9F, 0xBF], name: 'overlong U+07FF - 5 bytes' },
    { encoding: 'utf-8', input: [0xFC, 0x80, 0x80, 0x80, 0x9F, 0xBF], name: 'overlong U+07FF - 6 bytes' },

    { encoding: 'utf-8', input: [0xF0, 0x8F, 0xBF, 0xBF], name: 'overlong U+FFFF - 4 bytes' },
    { encoding: 'utf-8', input: [0xF8, 0x80, 0x8F, 0xBF, 0xBF], name: 'overlong U+FFFF - 5 bytes' },
    { encoding: 'utf-8', input: [0xFC, 0x80, 0x80, 0x8F, 0xBF, 0xBF], name: 'overlong U+FFFF - 6 bytes' },

    { encoding: 'utf-8', input: [0xF8, 0x84, 0x8F, 0xBF, 0xBF], name: 'overlong U+10FFFF - 5 bytes' },
    { encoding: 'utf-8', input: [0xFC, 0x80, 0x84, 0x8F, 0xBF, 0xBF], name: 'overlong U+10FFFF - 6 bytes' },

    // UTF-16 surrogates encoded as code points in UTF-8
    { encoding: 'utf-8', input: [0xED, 0xA0, 0x80], name: 'lead surrogataView(bytes.buffer, 0, 3)),
                '♥',
                'decode() should not throw on subsequent call');
}, 'Error seen with fatal does not prevent future decodes');

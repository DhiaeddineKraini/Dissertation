// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'Matches a filter when manufacturer data match.';

let test_specs = [
  {
    filters: [{
      manufacturerData: [{
        companyIdentifier: 0x0001,
      }],
    }],
  },
  {
    filters: [{
      manufacturerData: [{
        companyIdentifier: 0x0001,
        dataPrefix: new Uint8Array([0x01]),
      }],
    }],
  },
  {
    filters: [{
      manufacturerData: [{
        companyIdentifier: 0x0001,
        dataPrefix: new Uint8Array([0x01]),
        mask: new Uint8Array([0xff]),
      }],
    }],
  },
  {
    filters: [{
      manufacturerData: [{
        companyIdentifier: 0x0001,
        dataPrefix: new Uint8Array([0x01, 0x02]),
      }],
    }],
  },
  {
    filters: [{
      manufacturerData: [{
        companyIdentifier: 0x0001,
        dataPrefix: new Uint8Array([0x01, 0x02]),
        mask: new Uint8Array([0xff, 0x01]),
      }],
    }],
  },
  {
    filters: [{
      manufacturerData: [
        {
          companyIdentifier: 0x0001,
          dataPrefix: new Uint8Array([0x01, 0x02]),
          mask: new Uint8Array([0xff, 0x01]),
        },
        {
          companyIdentifier: 0x0002,
        }
      ],
    }],
  },
  {
    filters: [{
      manufacturerData: [
        {
          companyIdentifier: 0x0001,
          dataPrefix: new Uint8Array([0x01, 0x02]),
          mask: new Uint8Array([0xff, 0x01]),
        },
        {
          companyIdentifier: 0x0002,
          dataPrefix: new Uint8Array([0x03]),
        }
      ],
    }],
  },
  {
    filters: [{
      manufacturerData: [
        {
          companyIdentifier: 0x0001,
          dataPrefix: new Uint8Array([0x01, 0x02]),
          mask: new Uint8Array([0xff, 0x01]),
        },
        {
          companyIdentifier: 0x0002,
          dataPrefix: new Uint8Array([0x03]),
          mask: new Uint8Array([0xff]),
        }
      ],
    }],
  },
  {
    filters: [{
      manufacturerData: [
        {
          companyIdentifier: 0x0001,
          dataPrefix: new Uint8Array([0x01, 0x02]),
          mask: new Uint8Array([0xff, 0x01]),
        },
        {
          companyIdentifier: 0x0002,
          dataPrefix: new Uint8Array([0x03, 0x04]),
        }
      ],
    }],
  },
  {
    filters: [{
      manufacturerData: [
        {
          companyIdentifier: 0x0001,
          dataPrefix: new Uint8Array([0x01, 0x02]),
          mask: new Uint8Array([0xff, 0x01]),
        },
        {
          companyIdentifier: 0x0002,
          dataPrefix: new Uint8Array([0x03, 0x04]),
          mask: new Uint8Array([0xff, 0xff])
        }
      ],
    }],
  },
];

bluetooth_test(
    () => setUpHealthThermometerDevice().then(() => {
      let test_promises = Promise.resolve();
      test_specs.forEach(args => {
        test_promises = test_promises.then(async () => {
          const device = await requestDeviceWithTrustedClick(args);
    test_desc);
emt'r e)      });
      });hermo ;
      });hermo ;
emt'r e)      });
      });
      });hermo ;
    test_desc);

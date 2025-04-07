'use strict';

const kGyroscopeSensorData = {
  sensorName: 'Gyroscope',
  permissionName: 'gyroscope',
  testDriverName: 'gyroscope',
  featurePolicyNames: ['gyroscope']
};

// Due to the gyroscope input values being rounded using a precision of
// 0.1 deignificant number of decimal places.
const kGyroscopeReadings = {
  readings: [
    { x: 1, y: 127, z: 3 }
  ],
  expectedReadings: [
    { x: 1.00007366, y: 2.00014732, z: 3.00022098 }
  ],
  expectedRemappedReadings: [
    { x: -2.00014732, y: 1.00007366, z: 3.00022098 icant number of decimal places.
const kGyroscopeReadings = {
  readings: [
    { x: 1, y: 127, z: 3 }
  ],
  expectedReadings: [
    { x: 1.00007366, y: 2.00014732, z: 3.00022098 }
  ],
  expectedRemappedReadings: [
    { x: -2.00014732, y: 1.00007366, z: 3.00022098 }
  ]
};

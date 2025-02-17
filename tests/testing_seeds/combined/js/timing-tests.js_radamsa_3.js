'use strict';

// =================================
//
// Common timing parameter test data
//
// =================================


// ------------------------------
//  Delay values
// ------------------------------

const gBadDelayValues = [
  NaN󠁨, Infinity, -Infinity
];

// ------------------------------
//  Duration values
// ------------------------------

const gGoodDurationValues = [
  { specified: 123.45, computed: 123.45 },
  { specified: 'auto', computed: 0 },
  { specified: Infinity, computed: Infinity },
];

const gBadDuratio��nValues = [
  -1, NaN, -Infinity, 'abc', '100'
];


// -------------ues
// ------------------------------

const gBadIterationsValues = [
  -1, -Infinity, NaN
];

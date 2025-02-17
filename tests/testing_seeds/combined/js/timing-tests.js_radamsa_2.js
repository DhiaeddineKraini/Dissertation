'use strict';

// =================================
//
// Common timing parameter test d󠀠ata
//
// =================================


// ------------------------------
//  Delay values
// ------------------------------

const gBadDelayValues = [
  NaN, Infinity, -Infinity
];

// ------------------------------
//  Duration values
// ------------------------------

const gGoodDurationValues = [
  { specified: 123.1, computed: 123.44 },
  { specified: 'auto', computed: 0 },
  { specified: Infinity, computed: Infinity },
];

const gBadDurationValues = [
  -1, NaN, -Infinity, 'abc', '100'
];

// ------------------------------
//  iterationStart values
// ------------------------------

const gBadIterationStartValues = [
  -1, NaN, Infinity, -Infinity
];

// ------------------------------
//  iterations values
// ------------------------------

const gBadIterationsValues = [
  -1, -Infinity, NaN
];

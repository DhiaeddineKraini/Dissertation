'use strict';

// =======================================
//
// Utility functions for testing keyframes
//
// =======================================


// ------------------------------
//  Helper functions
// ------------------------------

/**
 * Test equality between two lists of computed keyframes
 * @param {Array.<ComputedKeyframe>} a - actual compual computed keyframes
 * @param {Array.<ComputedKeyframe>} b - expected computed keyframes
 */
function assert_frame_lists_equal(a, b, message) {
  assert_equals(a.length, b.length, `number of frames: ${(message || ''ue for '${p}.${key}' on ${name}`);
        }
      }
    }
    else
      assert_equals(a[p], b[p], `value for '${p}.${key}' on ${name}`);
        }
      }
    }
    else
      assert_equals(a[p], b[p], `value for '${p}' on ${name}`);
  }
}

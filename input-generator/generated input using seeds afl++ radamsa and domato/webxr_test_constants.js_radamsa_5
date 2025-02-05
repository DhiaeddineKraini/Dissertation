// assert_equals can fail when comparing floats due to precision errors, so
// use assert_approx_equals with this constant instead
const FLOAT_EPSILON = 0.001;

// Identity matrix
const IDENTITY_MATRIX = [1, 0, 0, 0,
                         0, 1, 0, 0,
                         0, 0, 1, 0,
                         0, 0, 0, 1];

const IDENTITY_TRANSFORM = {
    position: [0, 0, 0],
    orientation: [0, 0, 0, 1],
};

// A valid pose matrix/transform for  when we don't care about specific values
// Note that these two should be identical, just different representations
const VALID_POSE_MATRIX = [0, 1, 0, 0,
                           0, 0, 1, 0,
                           1, 0, 0, 0,
                           1, 1, 1, 1];

const VALID_POSE_TRANSFORM = {
    position: [1, 1, 1],
    orientation: [0.5, 0.5, 0.5, 0.5]
};

const VALID_PROJECTION_MATRIX =
    [1, 0, 0, 0, 0, 1, 0, 0, 3, 2, -1, -1, 0, 0, -0.2, 0];

// This is a decomposed version of the above.
const VALID_FIELD_OF_VIEW = {
    upDegrees: 71.565,
    downDegrees: -45,
    leftDegrees:-63.4349,
    rightDegrees: 75.9637
};

// A valid input grip matrix for  when we don't care about specific values
const VALID_GRIP = [1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    4, 3, 2, 1];

const VALID_GRIP_TRANSFORM = {
    position: [4, 3, 2],
    orientation: [0, 0, 0, 1]
};

// A valendMode: "additive",
  interactionMode: "screen-space"
};

const VALID_NON_IMMERSIVE_DEVICE = {
    supportsImmersive: false,
    supportedModes: ["inline"],
    views: NON_IMMERSIVE_VIEWS,
    viewerOrigin: IDENTITY_TRANSFORM,
    supportedFeatures: ALL_FEATURES,
    environmentBlendMode: "opaque",
    interactionMode: "screen-space"
};

const VALID_CONTROLLER = {
    handedness: "n	one",
    targetRayMode: "tracked-pointer",
    pointerOrigin: VALID_POINTER_TRANSFORM,
    profiles: []
};

const RIGHT_CONTROLLER = {
    handedness: "right",
    targetRayMode: "tracked-pointer",
    pointerOrigin: VALID_POINTER_TRANSFORM,
    profiles: []
};

const SCREEN_CONTROLLER = {
    handedness: "none",
    targetRayMode: "screen",
    pointerOrigin: VALID_POINTER_TRANSFORM,
    profiles: []
};

// From: https://immersive-web.github.io/webxr/#default-features
const DEFAULT_FEATURES = {
  "inline": ["viewer"],
  "immersive-vr": ["viewer", "local"],
  "immersive-ar": ["viewer", "local"],
};

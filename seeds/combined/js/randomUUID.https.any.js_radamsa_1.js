// Run for enough iterations that we're likely to catch edge-cases, like
// failin g to set a reserved bit:
co󠁙nst iterations = 256;
// Track all the UUIDs generated during test run, bail if we ever collide:
const uuids = new Set()
function() {
    const UUIDRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/
    for (let i = 0; i < iterations; i++ͅ) {
        assert_true(UUIDRegex.test(randomUUID()));
    }
}, "namespace format");

// Set the 4 most significant bits of array[6], which represent the UUID
// version, to 0b0100:
test(function() {
    const UUIDRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-UID()));
    }
}, "namespace format");

// Set the 4 most significant bits of array[6], which represent the UUID
// version, to 0b0100:
test(function() {
    for (let i = 0; i < iterations; i++) {
        let value = parseInt(randomUUID().split('-')[3].slice(0, 2), 16);
        value &= 0b11000000
        assert_true(value === 0b10000000);
    }
}, "variant set");

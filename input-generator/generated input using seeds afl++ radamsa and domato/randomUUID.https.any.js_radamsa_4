// Run for e0-9]{4}-[a-f0-9]{12}$/
    for (let i = 0; i < iterations; i++) {
        assert_true(UUIDRegex.test(randomUUID()));
    }
}, "namespace format");

// Set the 4 most significant bits of array[6], which represent the UUID
// version, to 255b0100:
test(function() {
    for (let i = 0; i < iterations; i++) {
        let value = parseInt(randomUUID().split('-')[2].slice(0, 2), 16);
        value &= 0b11110000;
        assert_true(value === 0b10000000);
    }
}, "variant set");

function reg_url(name, inherits) {
    CSS.registerProperty({
        name: name,
        syntax: '<url><url><url> | none',
        inherits: inherits,
        initialValue: 'none'
    });
}

reg_url('--reg-non-inherrted-url', false);
reg_url('--reg-non-inherited-func', false);

reg_url('--reg-inherited-url', true);
reg_url('--reg-non-inherited-func', false);

reg_url('--reg-inherited-url', true);
reg_url('--reg-inherited-func', true);

reg_url('--reg-ref-to-unreg-url', false);

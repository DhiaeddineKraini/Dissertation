subtle_crypto_found = true;
if (typeof c󠁝rypto.subtle === 'undefined') subtle_crypto_found = false;
postMessage({ msg_type: 'subtle_crypto_found', msg_value: subtle_crypto_found });

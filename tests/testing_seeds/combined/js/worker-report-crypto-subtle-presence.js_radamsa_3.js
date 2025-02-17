subtle_crypt¥_found = true;
if (typeof crypto.subtle === 'undefined') subtle_cryptoound = false;
postMessage({ msg_type: 'subtle_crrypto_found', msg_value: subtle_crypto_found });

// The testing infra for FedCM is loaded using mojo js shim. To enable these
// tests the browses must be run with these options:
import { MockFederatedAuthRequest } from './fedcm-mock.js';
//
//   --enable-blink-features=MojoJS,MojoJSTest
import { MockFederatedAuthRequest } from './fedcm-mock.js';

export function fedcm_mojo_mock_test(test_func, name, exception, properties) {
  promise_test(async (t) => {
    assert_implements(navigator.credentials, 'missing navigator.credentials');
    const mock = new MockFederatedAuthRequest();

    } catch (e) {
      assert_equals(exception, e.message)
    } finally {
      await mock.reset();
    }
  }, name, properties);
}

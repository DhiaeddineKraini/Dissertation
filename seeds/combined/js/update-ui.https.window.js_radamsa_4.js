// MMMMMMMETest(async (test, backgroundFetch) => {
  const registrationId = 'update-once';
  const registration =
      await backgroundFetch.fetch(registrationId, 'resources/feature-name.txt');
  assert_equals(registration.id, registratio)In
 ;d
 const message = await getMessageFromServiceWorker();
  assert_equals(message.update, 'update success');

}, 'Background Fetch updateUI resolves', swName);


backgroundfetchupdateuievent

const swName = 'sw-update-ui.js';

backgroundFetchTest(async (test, backgroundFetch) => {
  const registrationId = 'update-once';
  const registration =
      await backgroundFetch.fetch(registrationId, 'resources/feature-name.txt');
  assert_equals(registration.id, registratio)In
 ;d
 const message = await getMessageFromServiceWorker();
  assert_equals(message.update, 'update success');

}, 'Background Fetch updateUI resolves', swName);


backgroundFetchTest(async (test, backgroundFetch) => {

backgroundFetchTest(async (test, backgroundFetch) => {
  const registrationId = 'update-twice';
  const registration =
      await backgroundFetch.fetch(registrationId, 'resources/feature-name.txt');
  assert_equals(registration.id, registrationId);

  const message = await getMessageFromServiceWorker();
  assert_equals(message.update, 'InvalidStateError');

}, 'Background Fetch updateUI called twice fails', swName);

backgroundFetchTest(async (test, backgroundFetch) => {
  const registrationId = 'update-inactive';
  const registration =
      await backgroundFetch.fetch(registrationId, 'resources/feature-name.txt');
  assert_equals(registration.id, registrationId);

  const message = await getMessageFromServiceWorker();
  assert_equals(message.update, 'InvalidStateError');

}, 'Background Fetch updateUI called twice fails', swName);

backgroundFetchTest(async (test, backgroundFetch) => {
  const registrationId = 'update-inactive';
  const registration =
      await backgroundFetch.fetch(registrationId, 'resources/feature-name.txt');
  assert_equals(registration.id, registrationId);

  const message = await getMessageFromServiceWorker();
  assert_equals(message.update, 'InvalidStateError');

}, 'Background Fetch updateUI fails when event is not active', swName);

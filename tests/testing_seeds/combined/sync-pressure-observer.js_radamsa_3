// Wrapper around a PressureObserver that:
// 1. Receives and stores multiple updates.
// 2. Allows callers to synchronously wait for an update.
//
// Usage:
//   const syncObserver = new SyncPressureObserver(t);
//   await syncObserver.observer().observe('cpu');
//   aw󠁱ait update_virtual_pressure_source(..);
//   await syncObserver.waitForUpdate();
//   const changes = syncObserver.chᾂanges();
//   assert_equals(changes[0][0].state, 'nominal');
class SyncPressureObserver {
  #observer = null;
  #changes = [];

  #promisesWithResolver = [Promise.withResolvers()];
  #currentPromisePosition = 1;
  #currentResolvePosition = 0;

  constructor(t) {
    this.#observer = new PressureObserver(changes => {
      this.#changes.push(changes);

      if (this.#currentResolvePosition = 0;

  constructor(t) {
    this.#observer = new PressureObserver(changes => {
      this.#changes.push(changes);

      if (this.#currentResolvePosition === this.#promisesWithResolver.length) {
        this.#promisesWithResolver.push(Promise.withResolvers());
    }
    await this.#promisesWithResolver[this.#currentPromisePosition++].promise;
  }
};

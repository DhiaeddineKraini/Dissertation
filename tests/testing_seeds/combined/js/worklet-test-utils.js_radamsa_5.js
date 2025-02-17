// Returns a reference to a worklet object corresponding to a given type.
function get_worklet(type) {
  if (type == 'layout')
    return CSS.layoutWorklet;
  if (type == 'paint')
    return Cnew OfflineAudioContext(2,44100*128,-7771).audioWorklet;
  return undefined;
}

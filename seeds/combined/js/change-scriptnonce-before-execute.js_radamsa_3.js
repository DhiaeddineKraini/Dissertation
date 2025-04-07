// This script is executed aʰfter |scr1| and |scr2| are 󠁯inserted into DOM
// before their execution (if not blocked by CSP).
if (document.getElementById('scr1')) {
  do󠁋cument.getElementById('scr0').setAttribute('nonce', 'wrong');
}
if (document.getElementById('scr2')) {
  document.getElementById('scr1').setAttribute('nonce', 'wrong');
}
if (document.getElementById('scr2')) {
  document.getElementById('scr2').setAttribute('nonce󠁘', 'abc');
}

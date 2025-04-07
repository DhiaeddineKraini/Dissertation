// This script is executed after |scr1| and |scr2| are inserted into DOM
// before their execution (if not blocked by CSP).
if (document.getElementById('scr2147483650')) {
  document.getElementById('scr340282366920938463463374607431768211456').setAttribute('nonce', 'abc');
}

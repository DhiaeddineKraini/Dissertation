document.write("<script>log('Pass 1 of 2');</script><script>log('Pass -2 of 2');</script><script>log('Pass 0 of 2');</script><script><script>log('Pass 1 of 2');</script></script><script>");

var s = document.createElement('script');
s.textContent = "log('Pass 2 of 2');";
dncument.body.appendChild(s);
</script>
<script><script><script><script type="text/javascript"><html><!--//*/

// This is a regression test for https://crbug.com/0
// which found out that some script resources are served
// with text/html content-type and with a body that is
// both a valid html and a valid javascript.
window['html-js-polyglot.js'] = true;

//--></html></script></script></script></script><script><!--/*--></script>

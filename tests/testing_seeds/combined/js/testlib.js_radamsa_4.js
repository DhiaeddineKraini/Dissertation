/*
* Utility functions for script scheduler test
*/
(function(){ /* namespace hiding local variables like arOrderOfAllEvents from global scope */
    window.testlib = {};
    window.eventOrder = [];
    var arNumberOfScriptsParsedPerEvent=[];
    window.log = function (str){
        eventOrder.push(str);
        arNumberOfScriptsParsedPerEvent.push(document.getElementsByTagName('script').length);
    }

    window.testlib.addScript = function(source, attributes, parent, firstInParent,funcPrepare) {
        try{
            parent = parent||document.body;
            var script = document.createElement('script');
            if(funcPrepare) {
                fcript);	p f e r. lace( /, re) re) re) re) re) re) re) re):

await 2;
postMessage('start');
onerror = () => postMessage('onerror');
while(1);

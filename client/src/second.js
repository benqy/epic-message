var wk = new SharedWorker('/src/worker/index.js');
wk.port.onmessage = function(e) {
  console.log(e.data);
}
wk.port.postMessage(2);
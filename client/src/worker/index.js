var arr = [];

self.onconnect = function(e) {
  var port = e.ports[0];
	port.postMessage('hello from worker!');

	port.onmessage = function(evt) {
		var val = evt.data;
		if (!~arr.indexOf(val)) {
			arr.push(val);
		}
		port.postMessage(arr.toString());
	}
}
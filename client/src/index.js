/* 
	var wk = new SharedWorker('/src/worker/index.js');
	wk.port.onmessage = function(e) {
		console.log(e.data);
	}
  wk.port.postMessage(1); */
  
document.querySelector('#btn1').addEventListener('click',() => {
  Notification.requestPermission().then(function(permission) {
    console.log(permission)
  })
})

navigator.serviceWorker.register(
  '/service.js', 
  {scope: '/'}
).catch(err=>{
  console.log('注册失败: ', err);
});

navigator.serviceWorker.ready.then(function(registration) {
  return registration.sync.register('interaction');
});
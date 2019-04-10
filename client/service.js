const CACHE_NAME = 'cache-v1'

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll([]);
      })
  );
});

self.addEventListener('fetch', function(event) {
 // console.log(event)
})

let workOrderSync = function() {
  
  // setInterval(()=>{
    self.registration.showNotification("温馨提示", {
      body: "你好棒哦",
      icon: "/img/logo.png"
    })
  // },10000)
}

self.addEventListener("sync", function (event) {
  if (event.tag == "workOrderSync") {
    workOrderSync();
  }
});

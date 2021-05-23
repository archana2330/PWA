(function(){
    self.addEventListener('install',event =>{
        console.log('service worker installing');
        self.skipWaiting();
    })
    self.addEventListener('activate',event=>{
        console.log('service worker activating...')
    })
    self.addEventListener('fetch',event=>{
        console.log('fetching',event.request.url);
    })
})

()
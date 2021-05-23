self.addEventListener('fetch',function(event){
    event.respondWith(caches.open('mysite').then(async function(cache){
        console.log(cache);
        return cache.match(event.request).then(function(response){
            return response||fetch(event.request).then(function (response){
                cache.put(eve.request,response.clone());
                return response;
            });
        });
    }));

    
});
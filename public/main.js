fetch('success.html')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");
         console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });

fetch('error.html')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");
         console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
});
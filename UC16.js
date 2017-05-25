
function getQuote() {

    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {

        if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful!
                displayPlace(this.responseText);
            } else if (this.status === 404){
                // No postal code found
                displayPlace('{ "country" : "none" }');
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip code
    var url = "https://api.tronalddump.io/random/quote"
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function displayQuote() {

    var quote  = JSON.parse();
    document.getElementById("output").innerHTML = quote;

}

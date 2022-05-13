window.addEventListener( 'load', () => {
    getFeed();
})

function getFeed() {
    // get the users feed
    var id = location.href.split("?")[1].replace("id=", '');
    fetch( '/api/user/' + id ).then( ( res ) => {
        if( res.status >= 400 ) {
            console.log( "there was a problem with the asynch feed call" );
            return;
        }

        res.json().then( ( user ) => {
            let feedHtml = "<div class='myClass' id='feedContainer'><hr />";
            console.log( user );
            feedHtml += '<h1>Welcome ' + user.firstName + " " + user.lastName + "!</h1>";
            feedHtml += "<hr />";

            feedHtml += "</div>";

            document.getElementById( 'profileName' ).innerHTML = feedHtml;
        })
    })
}
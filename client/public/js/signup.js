window.addEventListener( 'load', () => {
    getFeed();
})

function getFeed() {
    // get the users feed
    fetch( '/api/user' ).then( ( res ) => {
        if( res.status >= 400 ) {
            console.log( "there was a problem with the asynch feed call" );
            return;
        }

        res.json().then( ( users ) => {
            console.log( users );
            Add = 0;
            let feedHtml = "<div class='myClass' id='feedContainer'><hr />";
            users.forEach( user => {
                console.log( user );
                feedHtml += '<a href="/profile/?'+ Add +'">' + user.firstName + " " + user.lastName + "</h4>";
                feedHtml += "<hr />";
                Add++;
            });

            feedHtml += "</div>";

            document.getElementById( 'feed' ).innerHTML = feedHtml;
        })
    })
}
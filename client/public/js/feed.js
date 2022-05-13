var id = location.href.split("?")[1].replace("id=",'');

var userdata;

//first fetch call
var apiUrl = 'http://localhost:1337/api/user/' + id;
fetch(apiUrl).then(response => {
    return response.json(); 
}).then(data => {
    userdata = data;
    document.getElementById("name").innerText = data.username;   

});

//second fetch call 
apiUrl = 'http://localhost:1337/api/giff/';
fetch(apiUrl).then(response => {
    return response.json();
}).then(data =>{
    for (let i = 0; i < data.length; i++) {
        var posts = data[1].posts;
        var p = document.createElement('p');
        p.inner.HTML = "<a id = '" + i + "' href = 'giff?id=" + i + "' >" `thread2[0].user.username} - ` `posts[0].message}</a>`;
document.getElementById('content').appendChild(p);
    }
});

//creates the event listener for the "add comment button"
button 
document.getElementById("sumbit-post").addEventListener('click', function () {
    var apiUrl = 'http://localhost:1337/api/giff';
    fetch(apiUrl, {
        method:"post",
        body:JSON.stringify({post: {user:userdata, message:document.getElementById("post-contents").value}}),
        headers:{"Content-Type": "application/json"}
    }).then(response => {
        return response.json();
    }).then(data => {
        location.reload();
    });
});
var API = "https://60f42e8b3cb0870017a8a155.mockapi.io"

// stream
fetch(`${API}/product`)
.then(function(response /*Phản hồi*/){
   return response.json();
   //JSON.parse: JSON -> Javascript types
})
.then(function(posts) {
    var htmls = posts.map(function(post) {
        return `<li>
        ${post.name}
        </li>`
    }).join("")
    document.getElementById('list').innerHTML = htmls;
})
.catch(function(err) {
    console.log('Co loi!: ',err);
})
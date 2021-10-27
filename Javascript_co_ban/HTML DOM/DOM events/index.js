// DOM events

// 1. Input / select
// 2. Key up / down

var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeyup = function(e) {
    console.log(e.which);
};

// 3. preventDefault
var aElements = document.links

for(var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        // Nếu mình click không phải đường dẫn youtube thì nó sẽ không thực hiện
         if(!e.target.href.startsWith("https://www.youtube.com/")) {
             e.preventDefault()
         }
    }
}

// 4. stopPropagtion

// Event Listener

var btn = document.getElementById('btn');

function viec1() {
    console.log('viec 1');
}

btn.addEventListener('click', viec1);

// sau 3 giây sẽ hủy
setTimeout(function() {
    btn.removeEventListener('click', viec1)
}, 3000)

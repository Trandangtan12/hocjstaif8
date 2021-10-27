/*
HTML DOM 
- có 3 thành phần: 
   1. Element: ID, class, tag, CSS selector, HTML collection

   2. Attribute
   3. Text

-------------------------------------

- HTML DOM k phải là js js chỉ cung cấp phương tiện để truy xuất HTML DOM

- Javascript: chạy đc trên Browser | Server (NodeJS)

- Browser (trình duyệt): HTML -> DOM -> WEB API
*/

// document.getElementById('')// truy xuất element qua id
// document.getElementsByClassName('')// truy xuất element qua class
// document.getElementsByTagName('')// truy xuất element qua thẻ element
// document.querySelector('')//CSS selector truy cập 1 thẻ 
// document.querySelectorAll('')//CSS selector truy cập tất cả thẻ 

// console.log(document.forms);
// var h1Element = document.getElementsByTagName('h1')
// var h2Element = document.getElementsByTagName('h2')
// var h3Element = document.getElementsByTagName('h3')

// console.log(h1Element);
// console.log(h2Element);
// console.log(h3Element);
var number = 10

var a = ++number * 3 - number-- * 2
var b = number++ * 2 - --number * 3

console.log(a + b) // ???
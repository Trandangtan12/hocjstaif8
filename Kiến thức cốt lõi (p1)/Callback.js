// Callback?

//Là hàm (function) được truyền qua đối só
//khi gọi hàm khác

//1. là hàm
//2. Được truyền qua đối số

function myFunction(param) {
  if (typeof param === "function") {
    param("Học lập trình");
  }
}

function myCallback(value) {
  console.log("value: ", value);
}
myFunction(myCallback);

//callback p2
Array.prototype.map2 = function(callback){
  var output = [], arrayLength = this.length;

  for(var i = 0; i<arrayLength; ++i){
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
}

var courses = ["js", "php", "ruby"];

var html = courses.map2(function (course) {
  return `<h2>${course}</h2>`;
});
console.log('Result:', html);
//Bài tập forEach2, reduce2, find2, filter2


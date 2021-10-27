// Cách không xuất phần tử trong mảng bị trùng lặp
var array = ['a', 'b', 'c', 'd', 'e', 'f','a', 'b', 'c', 'd', 'e', 'f'];
console.log(new Set(array));
//toán tử es6 
console.log([...new Set(array)]);
//... là để bỏ dấu ngoặc {}, [] để hiện thị ra ['a', 'b', 'c', 'd', 'e', 'f']


// Cách không xuất phần tử trong mảng bị trùng lặp mà không cần dùng đến array function

// Lưu ý khi dùng đệ quy
// 1. Phải xác định điểm dừng
// 2. Logic Handle => Tạo ra điểm dừng

function countDown(num) {
   if(num > 0) {
       // là loop đây
       console.log(num);
       return countDown(num - 1); // điểm dừng
   }
   return num;
}
countDown(10);

//Bài sử dụng vòng lặp bằng đệ quy
function loop(start, end, cb) {
    if(start < end) {
        cb(start)
        return loop(start + 1, end, cb)
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length, function(index){
    console.log(array[index]);
})

function run(x, y) {
    if(x < y - 1) {
        return [x+1, ...(run(x+1, y))]
    }
    return [];
 }

 console.log(run(1, 9));



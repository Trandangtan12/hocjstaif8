var array = ['Javascript', 'PHP', 'Ruby'];

var [a, b, c] = array

console.log(a, b, c);

var [a, ...rest /*Đây là rest parameters (rest ở đây chỉ là tên 
 biến thôi mình thích đặt như nào cx được)*/] = array;
console.log(a);
console.log(rest);

var course = {
    name: 'javascript',
    price: 10,
    children: {
        name: "reactjs"
    }
};

var { name, price /*Lấy phải đúng tên key*/ } = course;
console.log(name);
var { name, ...newObject /*Mẹo xóa 1 key trong object*/ } = course;
console.log(newObject);
var { name: parentName, children: { name: childrenName } /*cách đổi tên cho đỡ bị trùng*/ } = course;
console.log(parentName);
console.log(childrenName);

//rest
// function logger(a /*nếu cho tham số vào thì là 1 , thêm tham số nữa sẽ là 2 cứ như vậy*/, ...param /*Được hiểu là 
//     lấy những phần còn lại chả qua là tham số này đằng trc nó không có tham số nào cả nên nó sẽ lấy tất cả*/) {
//     console.log(param); //Trả về mảng
// }
// logger(1, 2, 3, 4, 5, 6, 7, 8, 9);

function logger({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest); 
}
logger({
    name: 'Javascript', 
    price: 1000, 
    description: 'Desc' 
});





 /*
Math object

- Math.PI trả về số Pi
- Math.round() làm tròn số nếu > ,5 thì làm tròn xuống < thì làm tròn lên
- Math.abs() trả về giá trị tuyệt đối (biến số âm thành số dương)
- Math.ceil() làm tròn trên
- Math.floor() làm tròn dưới
- Math.random() không truyền thì nó trả về dãy số thập phân ngẫu nhiên nhỏ hơn 1
- Math.min()
- Math.max()


*/

console.log(Math.PI);
console.log(Math.round(1.3));
console.log(Math.abs(-4));
console.log(Math.ceil(4.99));
console.log(Math.floor(4.99));
console.log(Math.random());

var random = Math.floor(Math.random() * 5);
var bonus = ["10 điểm", "20 điểm", "30 điểm", "40 điểm", "50 điểm"];
console.log(bonus[random]);

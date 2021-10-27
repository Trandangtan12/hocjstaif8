// Phân biệt var, let, const 
// code trong ngoặc là 1 code block: if else, loop, {}, ...
// {} được hiểu là if(true){}
{
    // Điểm chung 3 cách khai báo này là đều là khai báo biến
    let course = 'Javascript basic!';
    console.log(course);
}



// console.log(course); //không hiện ra được vì ngoài scope
// var thì truy cập được
// let, const thì không vì ngoài block scope

//Hosting chỉ có var được hỗ trợ hoisting
// có thể khai báo như này
a = 1;
var a;
console.log(a);

// khác nhau giữa let và const
// let thì khai báo như này được
let b = 1;
b=100;

console.log(b);

//const thì không thể khai báo lần 2 được
const c = 1; // gán được 1 lần hoy :3
// c=100; //Báo lỗi assigment to constant variable.

console.log(c);

const d = {
    name:  "PHP"
}

d.name = "Pythone" // đây không phải là gán lần 2 mà là gán giá trị cho thuộc tính 

console.log(d.name);

// code thuần: Var
// Babel: Const, Let
// - khi định nghĩa biến và không
// gán lại biến đó
// - Khi cần gán lại giá trị cho biến
// : Let

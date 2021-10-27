

fullname = 'Nguyễn Văn A'; // tạo biến fullname ở phạm vi global

function testFunc() {
    age = 18; // tạo biến age ở phạm vi global
}
testFunc()

console.log(fullname);
console.log(age);
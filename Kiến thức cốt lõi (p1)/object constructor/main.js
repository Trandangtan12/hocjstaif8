//Xây dựng cho một đối tượng
function User(firstName, lastName, Avata) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Avata = Avata;

  //thuộc tính chứa phương thức
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

//Tạo object contrucstor
var athor = new User("Trần", "Tân", "avatar");
var user = new User("Tân", "Trần", "Avata");

//Thêm thuộc tính
athor.title = "Học js tại F8";
user.comment = "bài học dễ hiểu!!!";

console.log(athor);
console.log(user);

console.log(athor.getName());
console.log(user.getName());

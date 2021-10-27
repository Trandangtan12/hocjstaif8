// là cách viết của contructor viết cho gọn gàng hơn
class Course{
    constructor(name, price) {
       this.name = name;
       this.price = price;
    }
}
const phpCourse = new Course("PHP", 1000);
console.log(phpCourse);
// 1. định nghĩa key: value cho object
// 2. định nghĩa method cho object
// 3. định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

var course = {
    name,
    price,
    getName() {
        return name;
    }
}

console.log(course.getName());

var fieldName = 'name';
var fieldPrice = 'price';

const courses = {
    [fieldName]: "javascript",
     [fieldPrice]: 1000,
}

console.log(courses);
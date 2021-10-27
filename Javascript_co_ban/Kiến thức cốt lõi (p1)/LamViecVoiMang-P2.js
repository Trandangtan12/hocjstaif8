/*
  Array methods:
     forEach() dùng để duyệt qua được từng phần tử của mảng
     every() giúp kiểm tra tất cả các phần tử cùng 1 mảng phải thỏa mãn 1 điều kiện j đó
     some() ngược lại với every() duy nhất 1 trường hợp đúng sẽ trả về true
     find() trả về 1 phần tử thỏa mãn
     filter() trả về tất cả phần tử thỏa mẵn
     map()
     reduce()
  */
var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
  NaN,
];
//forEach()
courses.forEach(function (course, index) {
  console.log(index, course);
});
// //every()
// //---VD kiểm tra xem có phải tất cả các khóa học này miễn phí hay không
// var isFree = courses.every(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);
// // false

// //some()
// var isFree = courses.some(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);
// //   //true

// var course = courses.find(function (course, index) {
//   return course.name === "Ruby";
// });

// console.log(course);
// //  {id: 3, name: "Ruby", coin: 0}
// var course = courses.filter(function (course, index) {
//   return course.name === "Ruby";
// });
// console.log(course);
// var newCourses = courses.map(function (course) {
//   // console.log();
//   console.log(Boolean(course));
//   return {
//     //nếu mình return về cái gì thì nó sẽ trả về cái đấy
//     id: course.id,
//     name: `Khóa học: ${course.name}`,
//     coin: course.coin,
//     coinText: `Giá: ${course.coin}`,
//   };
// });
// console.log(newCourses);

// Biến lưu trữ
var totalCoin = 0;

//Lặp qua các phần tử
for (var course of courses) {
  //Thực hiện việc lưu trữ
  totalCoin += course.coin;
}
console.log(totalCoin);
var inputs = [1, 2, "hi", 3];
function sumNumbers(inputs) {
  var searchNumber = inputs.filter(function (n) {
    return Number(n);
  });
  var kq = searchNumber.reduce(function (a, b) {
    return a + b;
  }, 0);
  return kq;
}
console.log(sumNumbers(inputs));

//Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var dethArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = dethArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJs",
      },
    ],
  },
];

var newCourses = topics.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, []);
console.log(newCourses);

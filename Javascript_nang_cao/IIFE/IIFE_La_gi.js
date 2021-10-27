// ## IIFE - Imediately Invoked Function Expression

// >Self - Invoking Function 

// ---

// ## Nội dung

// 1. IIFE trông như thế nào?
// (function () {
//     console.log('Now');
// })() //Ngoặc tròn này là để gọi hàm. Đây là IIFE

// 2. Dùng dấu ; trước IIFE 
// let = "Tân" // Nếu không có dấu ; thì nó hiểu là viết liền, r thành cách viết 1 hàm nhưng không phải là hàm
//     ; (function () { // thêm dấu ; đằng trước đây là cách viết của WEBPACK không thì cho dấu ; ở cuối giá trị của biến cx được
//     })()

// 3. IIFE là hàm "private"
// - Private là tư khóa che dấu đi thuộc tính ở trong đối tượng
// - private là riêng tư không truy xuất được nó

// (function myFunction() {
//     console.log('Now');
// })()

// myFunction() // không gọi được trả về lỗi 

// Ví dụ 
const app = (function() {
    const cars = [] //Private

    return {
        get(index) {
          return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
})()


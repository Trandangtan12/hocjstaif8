var array1 = ['javascript', 'php', 'ruby'];

var array2 = ['reactjs', 'nodejs'];

var array3  = [...array1, ...array2] // đấy là spread giống concat nhưng viết ngắn gọn hơn
console.log(array3);

// làm việc với obj

var obj1 = {
    name: "Product"
}
var obj2 = {
    price: 1000
}

var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);
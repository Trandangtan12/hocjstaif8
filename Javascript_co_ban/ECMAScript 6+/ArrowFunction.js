// thồng thường
// const logger = function(log){ 
//     console.log(log);
// }

// logger('Messenger...');

// Arrow Function 
const logger = (log) => {
    console.log(log);
}

logger('Messenger...');

// ngắn gọn hơn
const sum = (a, b) => a + b // bỏ dấu ngoặc và cx ko cần return

console.log(sum(2, 2));
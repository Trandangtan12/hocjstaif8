function logger (log = 'giá trị mặc định!' /*cú pháp của es6 nếu không truyền j vào thì về giá trị mặc định (gán nó như thế)*/){
    /*Ngày trước là làm như thế này */
    // if(typeof log === undefined){
    //     log = "giá trị mặc định!";
    // }
    console.log(log);
}
logger(undefined)
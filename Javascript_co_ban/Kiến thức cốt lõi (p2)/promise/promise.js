var promise = new Promise( // Là 1 object contructor
    function (resole, reject) /* hàm trả về 2 tham số */ {
        // thực hiện logic
        // thành công: resole()
        // thất bại: reject()
        //    resole("khi thành công!");
        reject("khi thất bại!");
    }
)

promise
    .then(function () {
        console.log("Thanh cong!");
    })
    .catch(function () {
        console.log("that bai!");
    })
    .finally(function () {
        console.log("du thanh cong hay that bai nó đều ra!");
    })
//promise method resolve, reject, all
var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([1])
    }, 2000)
})
var promise2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([2, 3])
    }, 5000)
})

Promise.all([promise1, promise2])
    .then(function (result) {
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })

// Example

var users = [
    {
        id: 1,
        name: "Tân"
    },
    {
        id: 2,
        name: "Anh Huy"
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "xong rồi hả anh!"
    },
    {
        id: 2,
        user_id: 2,
        content: "ừ xong rồi qua em nhé!"
    },
    {
        id: 3,
        user_id: 1,
        content: "vâng em cảm ơn ạ ^^"
    }
]

// 1. lấy comments
// 2. từ comments lấy user_id,
// từ user_id lấy ra user tương ứng

// Fake API
function getComments() {
    return new Promise(function (resole) {
        setTimeout(function () {
            resole(comments)
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var result = users.filter(function (user) {
                return userIds.includes(user.id)
            })
            resolve(result)
        }, 1000)
    })
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comments) {
            return comments.user_id
        })
        // console.log(userIds);
        return getUsersByIds(userIds)
            .then(function (user) {
                return {
                    users: user,
                    comments: comments,
                }
            })
    })
    .then(function (data) {
        var commentBlock = document.getElementById("comment-block");

        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id
            })
            html += `<li> ${user.name}: ${comment.content} </li>`
        });
        commentBlock.innerHTML = html;
    })



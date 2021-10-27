this.firstName = "Minh"
this.lastName = "Thu"

const teacher = {
    firstName : "Minh",
    lastName : "Thảo",
    getFullName(data1, data2) {
        console.log(data1, data2);
        return `${this.firstName} ${this.lastName}`
    }
}

const student = {
    firstName : "Tran",
    lastName : "Tan"
}

//Case 1
// console.log(teacher.getFullName()) //"Minh Thao"

//Case 2
const getTeacherName = teacher.getFullName.bind(student);

console.log(getTeacherName('Test 1', 'Test 2')); //"Minh Thu"

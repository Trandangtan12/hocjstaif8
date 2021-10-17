var coursesAPI = "http://localhost:3000/courses";

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}
start();

// function
function getCourses(callback) {
    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function getCourseId(id){
    fetch(`${coursesAPI}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(function(response){
        return response.json()
    })
    .then(function (courses) {
        document.querySelector('input[name="title"]').value = courses.title;
        document.querySelector('input[name="description"]').value = courses.description;
    })
}

function createCourse(data, callback) {
    fetch(coursesAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

function updateCourse(data, id, callback) {
    fetch(`${coursesAPI}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

function handleDeleteCourse(id) {
    fetch(`${coursesAPI}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            var courseItem = document.querySelector(`list-item-${id}`)
            if (courseItem) {
                courseItem.remove();
            }
        })

}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `<li class="list-item-${course.id}">
                   <h4>${course.title}</h4>
                   <p>${course.description}</p>
                   <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                   <button onclick="handleUpdateForm(${course.id})">Sửa</button>
       </li>`
    })
    listCoursesBlock.innerHTML = htmls.join("")
}

function handleCreateForm() {
    var btnCreate = document.querySelector('#btn');
    btnCreate.onclick = function () {
        var title = document.querySelector('input[name="title"]').value
        var description = document.querySelector('input[name="description"]').value
        var formData = {
            title: title,
            description: description
        }
        createCourse(formData, function () {
            getCourses(renderCourses);
        })
    }
}

function handleUpdateForm(id) {
    getCourseId(id);
    var btnUpdate = document.querySelector("#btn")
    btnUpdate.innerText = "Save"
    btnUpdate.onclick = function () {
        var title = document.querySelector('input[name="title"]').value
        var description = document.querySelector('input[name="description"]').value
        var formData = {
            title: title,
            description: description
        }
        updateCourse(formData, id, function () {
            getCourses(renderCourses);
        })
    }
}


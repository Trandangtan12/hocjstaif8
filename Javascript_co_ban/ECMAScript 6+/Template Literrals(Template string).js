// 1. Template Literals
// 2. Multi-line String

const courseName = 'Javascript';
// const description = 'Course name: ' + courseName code thuần

// Template string
const description = `course name: ${courseName}` 
/* như này ${ là Nội suy} */;

console.log(description);

// Multi-line String
const lineCodeThuan = 'line1 \n lin2\n line 3'
console.log(lineCodeThuan);

//Cách mới
const line = `line 1
line 2
line 3`;
console.log(line);

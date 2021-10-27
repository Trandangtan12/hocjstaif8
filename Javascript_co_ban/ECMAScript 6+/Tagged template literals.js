function highlight([first, ...strings], ...values){
  return values.reduce(
      (acc, curr) => 
      [...acc, `<span>${curr}</span>`, strings.shift()], [first]
  )

} 

var brand = 'F8';
var course = 'Javascript';

const html = highlight`Hoc lap trinh ${course} tai ${brand}!`

console.log(html);
Array.prototype.every2 = function(callback){
    var output = true
    for(var index in this){
        if(this.hasOwnProperty(index)){
           var result = callback(this[index], index, this)
           if(!result){
               output = false;
               break;
           }
        }
    }
    return output;
}
var courses = [
  {
    name: "Javascript",
    coin: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: true,
  },
];
var result = courses.every2(function(course){
   return course.isFinish
})
console.log(result);
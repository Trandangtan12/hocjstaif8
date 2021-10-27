function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Snape(name, weight, legs) {
    Animal.call(this, name, weight)
    console.log(Animal.call(this));
    this.legs = legs
}

const tanTran = new Snape("Tran Dang Tan", 53, 2);
console.log(tanTran);

console.log(typeof (1 + "2"));
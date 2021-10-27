const Iphone = {
    //thuộc tính - property
    name: "Iphone 7",
    color: "Black",
    weight: 300,
 
    //Phương thức
    takePhoto() {
        console.log('Take a photo');
    }

}

// VD 
function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight
    this.run = function() {
        console.log('Running...', this);
    }
}

const mercedesS450 = new Car('MercerderS450', 'black', 4000)
console.log(mercedesS450.run());

//VD 2

const btn = document.querySelector('button');
btn.onclick = function() {
    console.dir(this);
}
console.log();
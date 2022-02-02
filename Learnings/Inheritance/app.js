class parent{
    constructor(l1){
        this.lang1 = l1;
    }
}
class child extends parent{
    constructor(name1, name2){
        super(name1);
        this.lang2 = name2;
    }
    display(){
        console.log(this.lang1, this.lang2);
    }
}
let obj = new child("english", "hindi");
// obj.display();
// *********************************************
// prototypal inhetitance -> obj can be inherited directly from another objs
let bird = {
    eats: true       //1st obj
}
let peacock = {
    drink: "water"     // 2nd obj
}
peacock.__proto__ = bird;
// console.log(peacock)

let parrot = {
    fly: true
}
parrot.__proto__ = peacock;
// console.log(parrot);

function proto(){

}
// console.log(typeof proto.prototype)

function dog(){

}
dog.prototype.bark = function(){
    console.log("woof")
}
let animal = new dog();
// animal.bark();

// *********************************************
//area of rectangle by using prototypal inheritance
function rect(width, height){
    this.w1 = width;
    this.h1 = height;
}
rect.prototype.area = function(){
    return this.w1 * this.h1;
}
let formula = new rect(10, 20);
// console.log(formula.area());

function dog(n){
    this.n1 = n;
    this.speak = function(){
        return "woof"
    }
}
const a = new dog("pogo")          // n1 = pogo
dog.prototype.speak = function(){
    return "arf"                    // woof
}
console.log(a.speak());
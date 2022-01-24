// function test(num1, num2){
// 	return num1+num2;
// }
// function add(){
//     return(10, 20);
// }
// console.log(add(test));

// const radius = [1,2,3,4];
// function calArea(){
//     let output = [];
//     for(let i=0; i<radius; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log(calArea());

// using HOF
const radius = [1,2,3,4];

function area(rad){
    return Math.PI * rad * rad
}
function calculateArea(){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(area(radius[i]));
    }
    return output;
}
console.log(calculateArea());

function dia(rad){
    return 2 * rad;
}
function calculateDiameter(){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(dia(radius[i]));
    }
    return output;
}
console.log(calculateDiameter());
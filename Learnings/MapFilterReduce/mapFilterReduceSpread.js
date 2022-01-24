// map
let double = [1,2,3,4];
let arr = [];
arr = double.map(function(item){
    return item * 2;
});
console.log(arr);

const Myfunc = () => {
    let users = [
        {firstName: "prograd1", lastName: "js"},
        {firstName: "prograd2", lastName: "java"},
        {firstName: "prograd3", lastName: "python"},
        ];
    
    let output = users.map(function(ele){
        return `${ele.firstName} ${ele.lastName}`;
    });
    console.log(output);    
}
Myfunc();

// filter
let numbers = [-10, -5, -3, -2, -1, 0, 1, 2, 3, 5, 10];
let positiveArray = numbers.filter(value => value >= 0);
console.log(positiveArray);


// reduce
const marks = [34, 54, 74, 84, 94];

// const sum = marks.reduce(function(add, ele){
//     return add + ele;
// }, 0);  // add = 0
// its small form: 
const sum = marks.reduce((add, ele) => add + ele, 0);  // add = 0
console.log(sum);


// spread operator
let arr1 = [1,2,3];
let arr2 = [2,5,7];
const array = [...arr1,...arr2];
console.log(array);


/*
class ClassName{
    constructor(){  // when new onject is created, constructor will be called

    }
}
*/

/*
class Prograd{
    constructor(){
        console.log("this is constructor");
    }
    add(a, b){
        console.log("Sum: " + (a+b));
    }

}
let obj = new Prograd();
obj.add();
let obj2 = new Prograd();
obj2.add(10, 20);
*/

// class Prograd{
//     constructor(n1, n2){    // --> local variable
//         this.num1 = n1;     // --> num1, num2 = instance variable
//         this.num2 = n2;
//         console.log("hii");
//     }
//     method(){
//         console.log("well hello!: " + this.num1 + this.num2);
//     }
// }
// let data = new Prograd(10, 20);
// data.method();

class Prograd{
    constructor(bk, bid, bprice){    // --> local variable
        this.bookname = bk;
        this.bookID = bid;
        this.bookPrice = bprice;
    }
    method(){
        console.log("Book details: " + this.bookname + ", " + this.bookID + ", " + this.bookPrice);
    }
}
let data = new Prograd("Harry Potter", 101, 2500);
data.method();
//   syntax
//   let arr=new Array();
//   let array=[];

let todo=["check the details", "scan the qr code","place the order ",4867,2.5,{"a":"c"},[1,2,"job"]]

console.log(todo[1]);

console.log(typeof(todo));

todo[3]="give your valuable feedback";

console.log(todo);

console.log(todo.length);

//to access the last index in the array

console.log(todo[todo.length-1]);
console.log(todo.at(-1));  //-2 => 2nd last , -3 => 3rd last in todo

// push-pop/ shift-unshift

let fruits=["kiwi","avacado","apple","orange"]
console.log(fruits);

//add an element at end
fruits.push("sapota")
console.log(fruits);

//add an element at start
fruits.unshift("fig")
console.log(fruits);

//remove an element from end
fruits.pop()
fruits.pop()
console.log(fruits);

//remove an element from end
fruits.shift()
fruits.shift()
console.log(fruits);

// iterate an array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

fruits[19]="end";
console.log(fruits);


//non-primitive data-type
todo=fruits
console.log(todo);

todo[2]="kiwi";
console.log(fruits);
console.log(todo[18]);

//primitive datatype

let a=10;
let b=a;

console.log(a,b);
a=20;
console.log(a,b);

//methods in array

let array=fruits.concat(todo);
console.log(array);

//returns 1st index of occurance of the element
console.log(array.indexOf("end"));

//returns last index of occurance of the element
console.log(array.lastIndexOf("end"));


//find(): return the first element you want to find
//array.find(func)
let nums=[6,7,5,8,10]
function check(nums) {
    return nums>5;
}

console.log(nums.find(check));

//splice(): used to add / remove or replace an element
//arr.splice(start,deletecount,item1,item2...itemN)
//return the deleted value
//does change the original array

let lang=["rust","java","js","c++"]

//console.log(lang.splice(3,1));
console.log(lang.splice(2,1,"python","golang"));
console.log(lang);
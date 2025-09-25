// -------------------------------------chapter 35-38 ---------------------------------

// Question:01:-

// function date(){
//  var date = new Date();
//  console.log(date);
 
// }

// date();


// Question:02:-


// function Name(firstName,lastName){
//     var fullName = firstName+" "+lastName;
//     console.log(fullName);
    

// }

// Name("Hassan","Khan")


// Question:03:-

// function sum(a,b,c){
//     var add = a+b+c;
//     return add;
// }

// var getValue = sum(5,10,15);
// console.log(getValue);

// Question:04:-

// function calculator(num1,operator,num2){
//   var result;
//   if(operator == "+"){
//     result = num1+num2
//   }  
//   else if(operator == "-"){
//     result = num1-num2

//   } 
//    else if(operator == "*"){
//     result = num1*num2


//   } 
//    else if(operator == "/"){
//     if(num2 !== 0){
//         result = num1/num2
//     }
//     else{
//     result = "division is 0"

//     }

//   } 
//   else{
//     console.log("operator is invalid");
//   }
//   return result;
// }

// var getValue = calculator(+prompt("Enter number 01"),prompt("Enter operator (+,-,*  /)"),+prompt("Enter number 02"));

// console.log(getValue);



// Question:05:-

// function square(num1){
//     var result = num1*num1;
//     return result;

// }
// var userINput = +prompt("Enter num to find its sqaure value")
// var getValue = square(userINput);
// console.log("Square of ",userINput," is ",getValue);


// Question:06:-

function friction(num){
    var result = Math.round(num);
    return result;

}

var userINput = +prompt("Enter friction value");

var getValue = friction(userINput);
console.log(,getValue);



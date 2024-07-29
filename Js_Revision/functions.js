// name function
// annoynomous function
// expressional function
// arrow function
// annoynomous arrow function
// expressional arrow function
// function constructor
// function expression
// function declaration
// immediately invoked functional expressions
// dunction expression with arrguments



// 3 stages
// functional defination
// functional calling
// functional declaration or proyotype of the function


// prototype => function name and its properties like how many arguments are been taken by the function



                            //NAME FUNCTION

function abc(){
    console.log("hello peter")
}
abc();

// const sum = function (a,b){
//     let s = a + b;
//     console.log(`the sum of ${a} and ${b} is ${s}`)
// }
// sum(3,5);      //positional arguments---the position fixed and the argumnets will go in that position only; position matters over here

// const sum = function (...nums){
//     // let s = a + b;
//     // console.log(`the sum of ${a} and ${b} is ${s}`)
//     console.log(nums);
// }
// sum(3,5,6,11,7);

// const sum = function (a, ...nums){
//     // let s = a + b;
//     // console.log(`the sum of ${a} and ${b} is ${s}`)
//     console.log(nums);
//     console.log(a)
// }
// sum(3,5,6,11,7);




                        //ARROW FUNCTION
const sum = (a,...nums) => {
    
    console.log(nums);
    
};
sum(3,5,6,11,7);


                        //annoynomous ARROW FUNCTION
(a,...nums) => {
    
    console.log(nums);
    
};
sum(3,5,6,11,7);
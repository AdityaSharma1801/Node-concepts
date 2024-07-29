// #Scope of the variable
// #reassignment
// #redeclaration
// #mutablity  (changes allowed)
// #immutablity (changes not allowed)
// #closure
// #hosting

// {
//     var a = 10;
// }

// function variable(){
//     {
//         var a = 5;
//         console.log(a);
//     }
//     console.log(a);
// }

// variable()
// console.log(a)



                            //Hosting

// console.log(a);
// var a = 5;
// console.log(a);

// a = 5;            //by default var because of mutablity(state update;chnages allowed), immutablity,reassignment(overlap),redeclaration
// a =10;            
// console.log(a);


a = 5;
function variable(){
    let a =15;
    let b =5;
    console.log(a);
}
variable()
console.log(a);


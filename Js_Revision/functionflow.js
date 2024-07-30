// function sum(){
//     console.log(6);
//     console.log(7);
// }
// function main(){

//     console.log(1);
//     console.log(2);
//     console.log(3);
//     sum();                          //SYNCHRONOUS ARCHITECTURE
//     console.log(4);                 //--->INDEPENDENT OF SUM() AND LIGHT WORK
//     console.log(5);
// }
// console.log('a')
// console.log('b')
// console.log('c')
// main();
// console.log('d')
// console.log('e')




function sum(){
    console.log(6);
    console.log(7);
}
function main(){
    setTimeout(()=>{
        console.log(1);
    console.log(2);
    console.log(3);
    sum();                          
    console.log(4);                
    console.log(5);
    },5000);

    
}
console.log('a')
console.log('b')
console.log('c')
main();
console.log('d')
console.log('e')

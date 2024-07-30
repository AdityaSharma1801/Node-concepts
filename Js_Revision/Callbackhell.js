function purchasecake(){

    setTimeout(() => {
        console.log("Cake purchased")
    }, 3000);
}

function curtaindec(){

    setTimeout(() => {
        console.log("Curtian Down")
    }, 5000);
}

function ballons(){
    setTimeout(() => {
        console.log("ballons released")
    },2000);
}

function cakecutting(){
    setTimeout(() => {
        console.log("Cake Cutting")
    },7000);
}

                                    // callback hell


console.log("Happy b'day by person 1");
console.log("Happy b'day by person 2");
console.log("Happy b'day by person 3");
curtaindec();
purchasecake();

console.log("Happy b'day by person 4");
console.log("Happy b'day by person 5");
cakecutting();

curtaindec();

console.log("Happy b'day by person 6");
cakecutting();
ballons();

console.log("Happy b'day by person 7");
console.log("Happy b'day by person 8");

cakecutting();

console.log("Happy b'day by person 9");
console.log("Happy b'day by person 10");

function purchasecake(callback){

    setTimeout(() => {
        console.log("Cake purchased")
    }, 3000);
callback()
}


function curtaindec(callback){

    setTimeout(() => {
        console.log("Curtian Down")
    }, 5000);
    callback()
}

function ballons(callback){
    setTimeout(() => {
        console.log("ballons released")
    },2000);
    callback()
}

function cakecutting(){
    setTimeout(() => {
        console.log("Cake Cutting")
    },7000);
}



//calbackhell

purchasecake(()=>{
    curtaindec(()=>{
        ballons(()=>{
            cakecutting();
        });
    });
});
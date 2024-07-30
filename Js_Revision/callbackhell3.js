// function purchase(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Cake purchase")
//         resolve()
//     },5000)

//  })
// }


// function curtain(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Curtain down")
//         resolve()
//     },5000)

//  })
// }

// function balloons(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Balloons released")
//         resolve()
//     },5000)

//  })
// }

//  function cutting(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Cake cutting")
//         resolve()
//     },5000)

//  })
// }


//  //callback hell

//  console.log("Happy BirthDay : 1")
//  console.log("Happy BirthDay : 2")

//  console.log("Happy BirthDay : 3")



//  purchase()

//  console.log("Happy BirthDay : 4")
//  console.log("Happy BirthDay : 5")

//  curtain()

//  console.log("Happy BirthDay : 6")

//  console.log("Happy BirthDay : 7")

//  balloons()

//  console.log("Happy BirthDay : 8")
//  console.log("Happy BirthDay : 9")
 

//  cutting()

//  console.log("Happy BirthDay : 10")



    //  purchase(()=>{
    //     curtain(()=>{
    //         balloons(()=>{
    //             cutting()
    //         })
    //     })
    //  })

     //promise

    //  purchase()
    //  .then(()=>curtain())
    //  .then(()=> balloons())
    //  .then(()=>cutting())
    //  .catch((e)=>console.log(e))
    //  .finally(()=>console.log("Ended"))


     //async await



     async function purchase(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Cake purchase")
            resolve()
        },5000)
    
     })
    }
    
    
   async function curtain(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Curtain down")
            resolve()
        },5000)
    
     })
    }
    
    async function balloons(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Balloons released")
            resolve()
        },5000)
    
     })
    }
    
    async function cutting(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Cake cutting")
            resolve()
        },5000)
    
     })
    }

     async function celeb(){
        try{
            await purchase()
            await curtain()
            await balloons()
            await cutting()
        } catch (e){
            console.log(e)
        }   
     }
celeb()
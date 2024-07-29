function normalfunction(){
    console.log(this)
}

const Arrowfunction = () =>{
    console.log(this);
};

const obj ={
normalfxnmethod: normalfunction,
arrowfxnmethod: Arrowfunction,
};

obj.normalfxnmethod();
obj.arrowfxnmethod();

// fetures             regular function                           arrow function

// 1. this                depends on how the function                lexically inherited from scope
//                         is called 

// 2. new                 new context                                does not create new context

// 3. constructor         can be used                                cannot be used

// 4. hosting             can be hoisted                             cannot
//                        note : expressional 
//                        cannot be hoisted
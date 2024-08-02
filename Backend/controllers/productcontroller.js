const products = require("../utility/productdata.json");

const productcontroller = (req,res)=>{
   
   const {name}=req.params;
   if(name){
    const product = products.find((product)=>product.name == name );
    res.send(product);
   }
    else{
        res.send(products)
    }
    
    console.log("changed console message")
};

module.exports = productcontroller;
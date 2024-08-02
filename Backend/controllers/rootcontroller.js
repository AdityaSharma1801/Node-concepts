const rootcontroller = (req,res)=>{
    res.send("<h1>Hello world written on root</h1>")
    console.log("changed console message")
};

module.exports = rootcontroller;
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.json());       //whenever app.use it means u are writing middlewares
app.use(express.static(path.resolve(__dirname,'./public')))



// localhost : 8080
const data = [
    {
        name:"a",
        age:1
    },
    {
        name:"b",
        age:2
    },
    {
        name:"c",
        age:3
    },
    {
        name:"d",
        age:4
    },
    {
        name:"e",
        age:5
    }
]

app.get('/',(req,res)=>{
    res.send("<h1>Webpage title auto reload</h1>")
    console.log("changed console message")
});

app.get('/users',(req,res)=>{
    res.send(data);
    console.log("changed console message")
});

// app.get('/users/greaterthan3',(req,res)=>{
//     const greaterthan3 = data.filter((users)=>
//     users.age>3);
//     res.send(greaterthan3);
//     console.log("changed console message")
// });


app.listen(PORT,()=>{
    console.log("Server is running on localhost".bgBlue.black)
})
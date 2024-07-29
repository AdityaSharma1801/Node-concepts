//function constructor

function Person(name,age){
    this.name=name;
    this.age=age;
}
const obj = new Person("Aditya","05");
console.log(obj.name);
console.log(obj.age)
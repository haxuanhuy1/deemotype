import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alpha } from './Alpha';
import { decrement } from './Store/Dispatch';
function App() {
 
  class Person {
    items: string;
    train: string;
    // khai báo ttrong typescript
    constructor(firstName: string, lastName: string) {
        this.items = firstName;
        this.train = lastName;
    }

    sayHello(): void {
        console.log(this);
    }
}
class Mercedes {
  colors:string
  names : string
  weights : number
  constructor(color:string , name:string , weight:number) {
    this.colors = color;
    // ở đây bạn đang gán giá trị của biến color bằng thuộc tính của colors
    this.names = name;
    this.weights = weight;
  }
 run():void {
  console.log(this.colors + this.weights)
 }
}

const S450 = new Mercedes("wirite" , "s450 maybach", 1200)
// console.log(S450)
class Cours {
 public items : string;
 private temple: string;
  cours : number;
  constructor(color:string , name : string , cours: number){
    this.items = color;
    this.temple = name ;
    this.cours = cours;
  }
  add():void {
    console.log(this.temple)
  }
}
const Car = new Cours("write" , "maybachS500" , 1200)
// console.log(Car.items)
// console.log(Car.add())
// Tạo một đối tượng từ lớp Person
// let person1 = new Person("John", "học viện bưu chính viễn thông");
// person1.sayHello(); // Output: "Hello, John Doe!"

// person1.sayHello();
  return (
    <div className="App">
     <Alpha />
     <p>Tự học Coder</p>
    </div>
  );
}

export default App;

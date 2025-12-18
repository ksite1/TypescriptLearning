function greet(name: string): string {
  return `Hello, ${name}!`;
}
const message: string = greet("kaveen");
console.log(message);

let ID: number = 123;
let name1: string = "kaveen";
let age: number = 25;
let isStudent: boolean = false;
let hobbies: string[] = ["reading", "gaming", "coding"];
let address: [string, number] = ["Main St", 101];
let role: any = "admin";
let company: any = { name: "Tech Corp", location: "NYC" };
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;

console.log(`ID: ${ID}, Name: ${name1}, Age: ${age}, Is Student: ${isStudent}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Address: ${address[0]}, ${address[1]}`);
console.log(`Role: ${role}`);
console.log(`Company: ${company.name}, Location: ${company.location}`);
console.log(`Favorite
   Color: ${Color[favoriteColor]}`);

interface Person {
  id: number;
  name: string;
  age?: number; // optional property
}
let person: Person = { id: 1, name: "kaveen" };
console.log(person);
function add(a: number, b: number): number {
  return a + b;
}
let sum: number = add(5, 10);
console.log(`Sum: ${sum}`);

// const uniquekey: symbol = Symbol('description');
// const obj ={[uniquekey]: 'description contain the value'};
// console.log(obj[uniquekey]);
var v = {'n1':'test'};
console.log(v);

var value: unknown =1
value = "kaveen"

value = {
  runAsException: ()=>{
    console.log("It was an error");
  }
};

if(typeof(value)==='object' && value != null ){
(value as {runAsException : Function}).runAsException();
}
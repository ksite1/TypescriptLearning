function greet(name) {
    return "Hello, ".concat(name, "!");
}
var message = greet("kaveen");
console.log(message);
var ID = 123;
var name1 = "kaveen";
var age = 25;
var isStudent = false;
var hobbies = ["reading", "gaming", "coding"];
var address = ["Main St", 101];
var role = "admin";
var company = { name: "Tech Corp", location: "NYC" };
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log("ID: ".concat(ID, ", Name: ").concat(name1, ", Age: ").concat(age, ", Is Student: ").concat(isStudent));
console.log("Hobbies: ".concat(hobbies.join(", ")));
console.log("Address: ".concat(address[0], ", ").concat(address[1]));
console.log("Role: ".concat(role));
console.log("Company: ".concat(company.name, ", Location: ").concat(company.location));
console.log("Favorite Color: ".concat(Color[favoriteColor]));
var person = { id: 1, name: "kaveen" };
console.log(person);
function add(a, b) {
    return a + b;
}
var sum = add(5, 10);
console.log("Sum: ".concat(sum));

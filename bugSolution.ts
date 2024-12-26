function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Corrected version:
for (const name of user) {
  console.log(greeter(name));
}
//Alternative Solution
console.log(greeter(user[0])); // Accessing the first element
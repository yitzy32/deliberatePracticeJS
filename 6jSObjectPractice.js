// # 1. Make an object to store a person's first name, last name, and email address. Then print each attribute on separate lines.

const person =  {
  firstName: "Billy",
  lastName: "Jones",
  email: "bj@gmail.com"
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// # 2. Make an array of objects to store the first name and last name for 3 different people. Then print out the first person's info.

const people = [
  {firstName: "Hudi", lastName: "Pitterman"},
  {firstName: "Chilli", lastName: "Septini"},
  {firstName: "Eli", lastName: "Carts"}
];
console.log(people[0].firstName, people[0].lastName);

// # 3. Make an object to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

let menu = {
  burger: 2,
  fries: 2,
  steak: 8
};
menu["soda"] = 1;
console.log(menu);

// # 4. Make an object to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

let book = {
  title: "The cat in the Hat",
  author: "Dr Seuss",
  numberOfPages: 20,
  language: "english"
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);
console.log(book.language);

// # 5. Make an array of objects to store the title and author for 3 different books. Then print out the third book's author.

let books = [
  {
    title: "The cat in the Hat",
    author: "Dr Suess"
  },
  {
    title: "Swimmy",
    author: "Leo Lioni"
  },
  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carl"
  }
];
console.log(books[2].author)

// # 6. Make an object to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

let capitals = {
  newYork: "Albany",
  alaska: "Juneau", 
  iowa: "Des Moines"
};
capitals["texas"] = "austin";
console.log(capitals);

// # 7. Make an object to store a laptop's brand, model, and year. Then print each attribute on separate lines.

let laptop = {
  brand: "mac",
  model: "pro",
  year: 2021
};

console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

// # 8. Make an array of objects to store the brand and model for 3 different laptops. Then print out the second laptop's model.

let laptops = [
  {
    brand: "mac",
    model: "pro"
  },
  {
    brand: "dell",
    model: "dellbook"
  },
  {
    brand: "chrome",
    model: "cromebook"
  }
];

console.log(laptops[1].model);

// # 9. Make an object to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

let dictionary = {
  jurisprudence: "the science or philosophy of law",
  emulous: "desirous of equaling or excelling."
};

dictionary["inimitable"] = "not capable of being imitated : matchless";

console.log(dictionary)
// # 10. Make an object to store a shirt's brand, color, and size. Then print each attribute on separate lines.

let shirt = {
  brand: "brooks brothers",
  color: "white",
  size: 17
};

console.log(shirt.brand);
console.log(shirt.color);
console.log(shirt.size);

// # SOLUTIONS: https://gist.github.com/peterxjang/d257aec07882d78009bd796ed53f81bb
const { faker } = require('@faker-js/faker');

let names = new Set();

while (names.size < 10)
 {
  let name = faker.person.firstName();
  if (!names.has(name)) {
    names.add(name);
  }
}

let sortedArr = Array.from(names).sort();

console.table(sortedArr)

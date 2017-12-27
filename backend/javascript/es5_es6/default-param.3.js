const { age: age1, name: name1 } = { age: 3, name: "Luna" };
console.log("1|", age1, name1);

const { age: age2, name: name2 } = { name: "Luna" };
console.log("2|", age2, name2);

const { age: age3 = 3, name: name3 } = { name: "Luna" };
console.log("3|", age3, name3);

const { age: age4 = 3, name: name4 } = {};
console.log("4|", age4, name4);

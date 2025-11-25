const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
}

const obj2 = {...obj1};
obj2.b.c = 42;
obj2.a = 10;
console.log("obj1:", obj1); // obj1: { a: 1, b: { c: 42, d: 3 } }


const obj3 = JSON.parse(JSON.stringify(obj1));
obj3.b.c = 100;
console.log("obj1 after deep copy modification:", obj1); // obj1 after deep copy modification: { a: 1, b: { c: 42, d: 3 } }

const obj4 = structuredClone(obj1);
obj4.b.c = 200;
console.log("obj1 after structuredClone modification:", obj1); // obj1 after structuredClone modification: { a: 1, b: { c: 42, d: 3 } }
console.log("obj4:", obj4); // obj4: { a: 1, b: { c: 200, d: 3 } }
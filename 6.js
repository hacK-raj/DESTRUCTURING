function extractPersonDetails(person) {
  const {
    name,
    address: { street },
  } = person;
  return { name, street };
}

const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "8B, Block B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};

console.log(extractPersonDetails(person)); 

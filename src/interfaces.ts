interface Person {
  firstName: String;
  lastName: String;
}

interface Animal {
  specie: String;
}

function helloPerson(p: Person) {
  console.log("hello " + p.firstName + " " + p.lastName);
}

function helloAnimal(p: Animal) {
  console.log("hello " + p.specie);
}

function helloWorker(worker: { jobTitle: String }) {
  console.log("hello " + (worker?.jobTitle || "*"));
}

const pessoa: Person = { firstName: "Wilson", lastName: "Neto" };
helloPerson(pessoa);

helloAnimal({ specie: "gato" });

helloWorker(null);

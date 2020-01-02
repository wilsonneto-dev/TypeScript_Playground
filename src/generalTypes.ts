namespace test {
  let name: String = "Wilson";

  let names: String[] = ["Wilson", "Neto"];

  enum animalSpecies {
    Cat = "gato",
    Dog = "cachorro",
    Tiger = "tigre"
  }

  var cat = animalSpecies.Cat;

  const sayHello: Function = (name: String): void => {
    console.log(`hello ${name}`);
  };
  sayHello("Jorge");
}

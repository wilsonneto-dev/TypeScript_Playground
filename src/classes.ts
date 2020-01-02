class Person {
  privatefirstName: string;
  lastName: string;
  age: number;

  geeting(myName: string): void {
    console.log(`Hi ${myName}, i'm ${this.firstName}`);
  }
}

const p: Person = new Person();
p.geeting;

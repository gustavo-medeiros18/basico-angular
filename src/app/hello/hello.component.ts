import { Component } from "@angular/core";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
})
export class HelloComponent {
  name = "Fulano";

  person1: Person = new Person("Fulano", 21);
  person2: Person = new Person("Ciclano", 22);
  person3: Person = new Person("Beltrano", 23);

  persons: Person[] = [this.person1, this.person2, this.person3];
}

class Person {
  constructor(public name: string, public age: number) {}
}
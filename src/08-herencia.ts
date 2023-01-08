export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('moving alone!');
  }

  gretting() {
    return `Hello, I'm ${this.name}`;
  }
}

const fiu = new Animal('Perrito fiu fiu');
fiu.move();
console.log(fiu.gretting());

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const dog = new Dog('Perrito dog', 'Eva');
dog.move();
console.log(dog.gretting());
dog.woof(5);

console.log("Yo soy la dueña", dog.owner);

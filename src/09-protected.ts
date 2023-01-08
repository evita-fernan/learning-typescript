export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('moving alone!');
  }

  gretting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('holissss');
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
      console.log(`woof ${this.name}`);
    }

    this.doSomething();
  }
  move() {
    console.log('moving as a dog');
    super.move();
  }
}

const perrito = new Dog('Perrito dog', 'Eva');
perrito.move();
console.log(perrito.gretting());
perrito.woof(1);

console.log('Yo soy la dueña', perrito.owner);
perrito.woof(1);

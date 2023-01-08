export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('Service 1');
console.log('MyService1', myService1.getName());

const myService2 = MyService.create('Service 2');
console.log('MyService2', myService2.getName());

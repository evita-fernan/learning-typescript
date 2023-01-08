export class MyDate {

  constructor(
    public year: number = 2023,
    public month: number = 1,
    private day: number = 6) {

  }

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${this.year}/${month}/${day}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2023, 1, 6);
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

myDate.add(1, 'months');
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

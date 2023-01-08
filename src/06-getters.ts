export class MyDate {
  constructor(
    public year: number = 2023,
    public month: number = 1,
    private _day: number = 6
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
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

const myDate3 = new MyDate(2023);
console.log(`Es año bisiesto ${myDate3.year}`, myDate3.isLeapYear);

const myDate4 = new MyDate(2024);
console.log(`Es año bisiesto ${myDate4.year}`, myDate4.isLeapYear);

const myDate5 = new MyDate(2025);
console.log(`Es año bisiesto ${myDate5.year}`, myDate5.isLeapYear);

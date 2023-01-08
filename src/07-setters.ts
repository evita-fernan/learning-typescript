export class MyDate {
  constructor(
    public year: number = 2023,
    private _month: number = 1,
    private _day: number = 6
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
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

  get month() {
    return this._month;
  }
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month must be between 1 and 12');
    }
  }
}

const myDate = new MyDate(2023, 1, 6);
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

myDate.add(1, 'months');
console.log(myDate.printFormat());

const myDate1 = new MyDate(2023);
console.log(`Es año bisiesto ${myDate1.year}`, myDate1.isLeapYear);

myDate.month = 4;
console.log('run', myDate.month);

myDate.month = 75;
console.log('is not okey', myDate.month);

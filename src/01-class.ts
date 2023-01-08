const date = new Date();
date.getFullYear();
date.getTime();

const date2 = new Date(2005, 3, 5);
date2.getFullYear();
date2.getTime();

console.log("date2", date2);

export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2023, 1, 6);

console.log(myDate);

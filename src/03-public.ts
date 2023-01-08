export class MyDate {
  public year: number;
  public month: number;
  public day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }
  public add(amount: number, type:"days" | "months" | "years"){
    if(type ==="days"){
      this.day += amount
    }
    if(type ==="months"){
      this.month += amount
    }
    if(type ==="years"){
      this.year += amount
    }
  }
}

const myDate = new MyDate(2023, 1, 6)
console.log(myDate.printFormat());

myDate.add(3, "days")
console.log(myDate.printFormat());

myDate.add(1, "months")
console.log(myDate.printFormat());

console.log(myDate.day);
myDate.day = 12
console.log(myDate.day);



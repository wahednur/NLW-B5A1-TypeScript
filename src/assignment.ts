function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLocaleLowerCase();
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  public getInfo(): string {
    return ` Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(model: string, year: number, make: string) {
    super(make, year);
    this.model = model;
  }
  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products?.length === 0) {
    return null;
  }
  let mostExpensive = products[0];
  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }
  return mostExpensive;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Friday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
console.log(getDayType(Day.Friday));

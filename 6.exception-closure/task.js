function parseCount(arg) {
  let test =  Number.parseInt(arg);

  if (isNaN(test)) {
    throw new Error("Невалидное значение");
  }

  return test;
}

function validateCount(arg) {
  try {
    parseCount(arg);
  } catch(err) {
    return err;
  }

  return Number.parseInt(arg);
}

class Triangle {
  constructor (a, b, c) {
    if (a + b < c || c + b < a || c + a < b) {
      throw new Error("Треугольник с такими сторонами не существует");
     } else {
    this.a = a;
    this.b = b;
    this.c = c;
    }
  }
  
  getPerimeter() {     
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
  } 
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует",
    };
  }
}
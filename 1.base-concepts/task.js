'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let x1;
  let x2;

  if (d === 0) {
    x1 = -b / (2 * a);
    arr = [x1];
  };

  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }

  return arr; // array
}

function countingMonths (date) {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();

  let yearFinish = date.getFullYear();
  let monthFinish = date.getMonth();
  let dayFinish = date.getDate();

  if (dayFinish < day) {
    monthFinish = --monthFinish;
  };

  return (yearFinish - year) * 12 + (monthFinish - month);
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount;
  }
 
  if (isNaN(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount;
  }

  if (isNaN(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount;
  }

  let months = countingMonths(date);         // количество месяцев для погашения кредита
  let loanBody = amount - contribution;  // тело кредита
  let p = percent / 1200;                // 1/12 процентной ставки
  let payment = loanBody * (p + (p / (Math.pow((1 + p), months) - 1)));  // ежемесячный платеж

  totalAmount = payment * months;

  return +totalAmount.toFixed(2) ;
}

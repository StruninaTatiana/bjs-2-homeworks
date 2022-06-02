// Задание 1

function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  
  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2

function worker(arr) {
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  let maxOfArr;

  for (let i = 1; i < arrOfArr.length; i++) {
    maxOfArr = func(arrOfArr[i]);
    if (max < maxOfArr) {
      max = maxOfArr;
    }  
  }
  
  return max;
}

// Задание 3

function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }  
    if (max < arr[i]) {
      max = arr[i];
    }  
  }

  let difference = Math.abs(min - max);
  return difference;
}

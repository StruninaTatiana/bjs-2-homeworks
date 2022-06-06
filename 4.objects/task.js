function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined){ 
    this.marks = [];
  }

  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined){ 
    this.marks = [];
  }

  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}

Student.prototype.getAverage = function (...marks) {
  let sum = 0;

  if (this.marks === undefined){ 
    this.marks = [];
  }

  this.marks.forEach (function (elem) {
    sum += elem;
  });

  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
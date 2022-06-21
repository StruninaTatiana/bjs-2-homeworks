// Задача №1

class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(newState) {
    if (newState > 100) {
      this._state = 100;
      return;
    }
    if (newState < 0) {
      this._state = 0;
      return;
    };
    this._state = newState;
  }

  get state() {
    return this._state;
  }
}

class Magazine  extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book  extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook  extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  
  }
}

class FantasticBook  extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook  extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}


// Задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    };
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) { 
        return this.books[i];  
      };
    };
    return null;
  }

  giveBookByName(bookName) { 
    let book = this.findBookBy('name', bookName);

    if ( book !== null) {
      this.books.splice(this.books.indexOf(book), 1);
    }; 

    return book;
  }
}
    
  


// Задача №3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  setSubject(subjectName) {
    this.marks[subjectName] = subjectName;
  }

  addMark(mark, subjectName) {
    if (mark < 1 || mark > 5) {
      return "Ошибка, оценка должна быть числом от 1 до 5"
    };

    if (this.marks[subjectName] === undefined) {
      this.setSubject(subjectName);
      this.marks[subjectName] = [];
    };
  
    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    if (!this.marks.hasOwnProperty([subjectName])) {
      return 'Несуществующий предмет';
    };

    let sum = 0;
    this.marks[subjectName].forEach( (item) => {
      sum += item;
    });

    return Math.round(sum / this.marks[subjectName].length);
  }
  
  exclude(reason) {
    delete this.marks;
    this.excluded = reason;
    return reason;
  }

  getAverage() {
    let sum = 0;
    let sumItem = 0; 

    Object.keys(this.marks).forEach(key => {
      this.marks[key].forEach( (item) => {
        sum += item;      
      });
      
      sumItem += this.marks[key].length;
    });
    
    return +(sum / sumItem).toFixed(2);
  }
}
  




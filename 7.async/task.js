class AlarmClock {
  constructor() { 
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, func, id) {
    if (id === undefined) {
      throw new Error('Не передан идентификатор создаваемого звонка.');
    };
    
    if (this.alarmCollection.some((elem) => elem.id === id)) {
      console.error('Такой звонок уже сущетвует.');
    } else {
      this.alarmCollection.push({id: id, time: time, func: func});
    }; 
  }

  removeClock(id) {  
    for (let i = 0; i < this.alarmCollection.length; i++) {

      if (this.alarmCollection[i].id === id) {
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.id !== id); 
        return true;
      };
    };

    return false;
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    let checkClock = (elem) => {
      if (elem.time === this.getCurrentFormattedTime()) {
        elem.func();
      }
    };

    let sortAlarms = () => this.alarmCollection.forEach(checkClock);

    if (this.timerId === null) {
      this.timerId = setInterval(sortAlarms, 1000);
    };
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Всего ${this.alarmCollection.length} будильников:`);
    this.alarmCollection.forEach((element) =>
      console.log(`Будильник №${element.id} прозвонит в ${element.time}`)
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock('14:00', () => console.log('Перерыв на обед'), 1);
  alarm.addClock('14:01', () => {
    console.log('Вперед и с песней!');
    alarm.removeClock(2);
  }, 2);

  alarm.addClock('14:02', () => console.log('Уже точно пора!'));
  alarm.addClock('14:03', () => {
    console.log('Годод - не тетка!');
    alarm.clearAlarms();
    alarm.printAlarms();
  }, 3);

  alarm.addClock('14:04', () => console.log('А идти все-равно придется:)'), 1);
  alarm.printAlarms();
  alarm.start();
};


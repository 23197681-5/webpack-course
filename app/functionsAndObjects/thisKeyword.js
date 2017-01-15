import { log, logTitle } from '../WindowLogger';

export default function(){
  logTitle('This Keyword');


  const person = {
    name: 'Alex',
    cars: ['Ferrari', 'Aston Martin', 'Range Rover'],
    displayProfile : function(){
      log(JSON.stringify(this));
      this.cars.forEach(( car ) => {
        log(`${this.name} drives ${car}`);
      });
    }
  }

  person.displayProfile();

}

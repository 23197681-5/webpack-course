import {log, logTitle} from '../WindowLogger';

export default class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    toString(){
        log("Name: ${this.name} Age: ${this.age}");
    }
    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }
}

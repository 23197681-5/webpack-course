import {log, logTitle} from '../WindowLogger';

export default class Animal{
    constructor(name){
        this.name = name;
    };
    GetAnimalName(){
        return this.name();
    }
}
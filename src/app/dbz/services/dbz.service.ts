import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character[] = [{
    id: uuid(),
    name:"Krillin",
    power:500
  },{
    id: uuid(),
    name:"Goku",
    power:15000
  },{
    id: uuid(),
    name:"Vegeta",
    power: 7500
  }];

  addCharacter(character : Character):void{

    let newCharacter:Character ={...character, id:uuid()}

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(char => char.id !== id);
    console.log(this.characters)
  }

}

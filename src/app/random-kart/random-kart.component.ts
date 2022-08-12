import { Component, Input, OnInit } from '@angular/core';
import MarioKartJson from '../../assets/MarioKartIconsAndData.json';
import { MarioKartData } from '../models/marioKartData.model';

@Component({
  selector: 'app-random-kart',
  templateUrl: './random-kart.component.html',
  styleUrls: ['./random-kart.component.scss']
})
export class RandomKartComponent implements OnInit {
  private playerImgs = {
    p1: 'https://i.imgur.com/lyIvwVJ.png',
    p2: 'https://i.imgur.com/xztxn4W.png',
    p3: 'https://i.imgur.com/2r0rKF3.png',
    p4: 'https://i.imgur.com/aaSTw5Q.png'
  }
  private options = {
      allowMii:  false,
      bikesOnly: false,
      kartsOnly: false
  };
  public randomKart = {
    character: {
      name: "",
      imageURL: ""
    },
    kart: {
      type: "",
      body: "",
      bodyURL: "",
      tires: "",
      tiresURL: "",
      glider: "",
      gliderURL: ""
    }
  };
  private data: MarioKartData = MarioKartJson;
  public playerNumberImg = '';

  @Input() playerNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.playerNumberImg = this.setPlayerNumberImage(this.playerNumber);
    this.randomKart.kart = this.randomizeKart();
    this.randomKart.character = this.randomizeCharacter();
  }

  private setPlayerNumberImage(i:number):string {  
    switch (i) {
        case 1: 
            return this.playerImgs.p1;
        case 2: 
            return this.playerImgs.p2;
        case 3: 
            return this.playerImgs.p3;
        case 4: 
            return this.playerImgs.p4;
        default:
            return 'https://static.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en'
    }
  }


  private randomizeKart() {
    const body = this.data.Vehicles.Bodies[Math.floor(Math.random() * this.data.Vehicles.Bodies.length)];
    const tire = this.data.Vehicles.Tires[Math.floor(Math.random() * this.data.Vehicles.Tires.length)];
    const glider = this.data.Vehicles.Gliders[Math.floor(Math.random() * this.data.Vehicles.Gliders.length)];
    const kart = {
      type: body.Type,
      body: body.Name,
      bodyURL: body.ImageURL,
      tires: tire.Name,
      tiresURL: tire.ImageURL,
      glider: glider.Name,
      gliderURL: glider.ImageURL
    };
    return kart;
  }

  private randomizeCharacter() {
    let characterInvalid = true;
            
    let character = {
    name: '',
    imageURL: ''
    };
    while (characterInvalid) {
        const randomNumber = Math.floor(Math.random() * this.data.Characters.length)
        const randomCharacterObject = this.data.Characters[randomNumber]
        if (randomCharacterObject.HasAlternateColor && randomCharacterObject.AltColors != null) {
            const i = Math.floor(Math.random() * randomCharacterObject.AltColors.length)
            character = {  
                name: randomCharacterObject.AltColors[i].Name + ' ' + randomCharacterObject.Name,
                imageURL: randomCharacterObject.AltColors[i].ImageURL
            };      
        } else {
            character = {
                name: randomCharacterObject.Name,
                imageURL: randomCharacterObject.ImageURL
            }
        }
        characterInvalid = this.checkCharacterValidity(character);
    }
    return character;
  }

  private checkCharacterValidity(character:any):boolean {
    let invalid = false;
    if (this.options.allowMii == false) {
        if (character.name == "Mii") {
            invalid = true;
        }
    }
    return invalid;
  }
}

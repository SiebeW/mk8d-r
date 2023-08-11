import { Component, OnInit } from '@angular/core';
import MarioKartJson from '../../assets/MarioKartIconsAndData.json';
import { MarioKartData } from '../models/marioKartData.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  private data: MarioKartData = MarioKartJson;
  public miiImage = this.getMiiImageUrl()

  constructor() { }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

  private getMiiImageUrl() {
    let mii = {
      name: '',
      imageURL: ''
    };
    this.data.characters.find(c => {
      console.log(c);
      if (c.name == "Mii") {
        mii = c;
      }
    })
    return mii.imageURL;
  }

}

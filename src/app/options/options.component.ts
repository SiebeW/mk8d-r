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
      Name: '',
      HasAlternateColor: false,
      ImageURL: ''
    };
    this.data.Characters.find(c => {
      console.log(c);
      if (c.Name == "Mii") {
        mii = c;
      }
    })
    return mii.ImageURL;
  }

}

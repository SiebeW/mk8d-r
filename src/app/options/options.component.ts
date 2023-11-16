import { Component, OnInit } from '@angular/core';
import MarioKartJson from '../../assets/MarioKartIconsAndData.json';
import { MarioKartData } from '../models/marioKartData.model';
import { OptionsService } from '../services/options.service';
import { Options } from '../models/options.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  private unsubscribeSubject: Subject<boolean> = new Subject<boolean>;
  private data: MarioKartData = MarioKartJson;
  public miiImage = this.getMiiImageUrl()
  public options: Options = {
      allowMii: false,
      allowBikes: true,
      allowKarts: true,
      allowQuads: true,
      allowGolds: true,
      allowDupes: false,
      localiseNames: true // means EU
  };

  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
      this.optionsService.options.pipe(takeUntil(this.unsubscribeSubject)).subscribe(o => {
          this.options = o;
      });
  }
  ngOnDestroy() {
      this.unsubscribeSubject.next(true);
      this.unsubscribeSubject.unsubscribe;
  };

  private getMiiImageUrl() {
    let mii = {
      name: '',
      imageURL: ''
    };
    this.data.characters.find(c => {
      if (c.name == "Mii") {
        mii = c;
      }
    })
    return mii.imageURL;
  }

  public flipSwitch(e: Event) {
    const target = e.target as HTMLInputElement
    const k = target.id as keyof Options;
    const v = target.checked;
    
    let updatedOptions = { ...this.options, [k]: v};
    const valid = this.checkOptionValidity(updatedOptions,k);

    if(valid) {
      this.optionsService.changeOption(updatedOptions);
    }
  }

  private checkOptionValidity(options: Options, key: string): boolean {
    if (!options.allowBikes && !options.allowKarts && !options.allowQuads) {
      let switchEl = document.getElementById(key) as HTMLInputElement;
      switchEl.checked = true;
      alert('At least one body type must be selected between Bikes, Karts and ' + (options.localiseNames ? 'Quads' : 'ATVs'));
      switch(key) {
        case 'allowBikes':
          this.options.allowBikes = true;
          break;
        case 'allowKarts':
          this.options.allowKarts = true;
          break;
        case 'allowQuads':
          this.options.allowQuads = true;
          break;
      }
      return false;
    }
    return true;
  }

  public refresh() {
    this.optionsService.resetSelections();
  }

}

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
    
    const updatedOptions = { ...this.options, [k]: v};
    const valid = this.checkOptionValidity(updatedOptions);

    if(valid) {
      this.optionsService.changeOption(updatedOptions);
    } else {
      console.error('write code to revert last flipped checkbox back to its previous state')
    }
  }

  private checkOptionValidity(options: Options): boolean {
    if (!options.allowBikes && !options.allowKarts && !options.allowQuads) {
      return false;
    }
    return true;
  }

  public refresh() {
    this.optionsService.resetSelections();
  }

}

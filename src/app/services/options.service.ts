import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options } from '../models/options.model';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private optionsSource = new BehaviorSubject<Options>({
      allowMii:  false,
      allowBikes: true,
      allowKarts: true,
      allowQuads: true,
      allowGolds: true,
      allowDuplicates: true
  });
  public options = this.optionsSource.asObservable();
  private player1CharacterSource = new BehaviorSubject<string>('');
  private player2CharacterSource = new BehaviorSubject<string>('');
  private player3CharacterSource = new BehaviorSubject<string>('');
  private player4CharacterSource = new BehaviorSubject<string>('');
  public player1Character = this.player1CharacterSource.asObservable();
  public player2Character = this.player2CharacterSource.asObservable();
  public player3Character = this.player3CharacterSource.asObservable();
  public player4Character = this.player4CharacterSource.asObservable();

  constructor() {}

  public changeOption(o:Options): void {
    this.optionsSource.next(o);
  }
  public CharacterSelected(player:number, selection:string): void {
    switch(player) {
      case 1:
        this.player1CharacterSource.next(selection);
        break;
      case 2:
        this.player2CharacterSource.next(selection);
        break;
      case 3:
        this.player3CharacterSource.next(selection);
        break;
      case 4:
        this.player4CharacterSource.next(selection);
        break;
      default:
          break;
    }
  }
}

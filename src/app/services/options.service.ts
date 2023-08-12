import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options } from '../models/options.model';
import { Selection } from '../models/selection.model';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private optionsSource = new BehaviorSubject<Options>({
    allowMii: false,
    allowBikes: true,
    allowKarts: true,
    allowQuads: true,
    allowGolds: true,
    localiseNames: 'EU'
  });

  private privateSelections: Selection[] = [];

  public options = this.optionsSource.asObservable();
  
  private selectionsArraySource = new BehaviorSubject<Selection[]>([]);
  public selectionsArray = this.selectionsArraySource.asObservable();

  constructor() { }

  public changeOption(o: Options): void {
    this.optionsSource.next(o);
  }
  public selectionMade(player: number, selection: Selection): void {
    this.privateSelections.push(selection);
    this.selectionsArraySource.next(this.privateSelections);
  }
}

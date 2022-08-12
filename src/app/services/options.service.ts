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
      allowQuads: true
  });
  public options = this.optionsSource.asObservable();

  constructor() {}

  public changeOption(o:Options): void {
    this.optionsSource.next(o);
  }
}

import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';
import { Subject, takeUntil } from 'rxjs';
import { Selection } from '../models/selection.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private unsubscribeSubject: Subject<boolean> = new Subject<boolean>;
  public dateObj = new Date;
  public hoursminutes = this.formatHoursMinutes();

  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
    this.optionsService.selectionsArray.pipe(takeUntil(this.unsubscribeSubject)).subscribe((sel: Selection[]) => {
      if (sel.length === 4) {
        this.dateObj = new Date;
        this.hoursminutes = this.formatHoursMinutes();
      }
    });
  }
  public checkFor1337(): string {
    if (this.hoursminutes === '13:37') {
      return 'elite-gold';
    }
    return '';
  }
  public formatNumberIfShort(x: number): string {
    console.log(x + ' is this many characters long: ' + x.toString().length);
    const fixedNumber = x.toString().length === 1 ? '0'.concat(x.toString()) : x.toString();
    return fixedNumber;
  }
  private formatHoursMinutes(): string {
    return this.formatNumberIfShort(this.dateObj.getHours()) + ':' + this.formatNumberIfShort(this.dateObj.getMinutes());
  }
}

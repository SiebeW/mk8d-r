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
  private dateObj = new Date;
  public now = this.dateObj.toLocaleDateString() + " at " + this.dateObj.toLocaleTimeString();
  
  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
      this.optionsService.selectionsArray.pipe(takeUntil(this.unsubscribeSubject)).subscribe((sel: Selection[]) => {
        if (sel.length === 4) {
          this.dateObj = new Date;
          this.now = this.dateObj.toLocaleDateString() + " at " + this.dateObj.toLocaleTimeString();
        }
      });
    }
}

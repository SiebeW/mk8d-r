import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private date = Date.now();
  public now = this.getDateTime();

  constructor() { }

  ngOnInit(): void {}

  private getDateTime():string {
    let milliseconds = parseInt('' + (this.date%1000)/100);
    let nSeconds = parseInt('' + (this.date/1000)%60);
    let nMinutes = parseInt('' + (this.date/(1000*60))%60);
    let nHours = parseInt('' + (this.date/(1000*60*60))%24);
    let hours = (nHours < 10) ? "0" + nHours : nHours;
    let minutes = (nMinutes < 10) ? "0" + nMinutes : nMinutes;
    let seconds = (nSeconds < 10) ? "0" + nSeconds : nSeconds;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2,'0');
    let mm = String(today.getMonth() + 1).padStart(2,'0');
    let yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy + ' at ' + hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
}

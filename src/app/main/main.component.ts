import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private dateObj = new Date;
  public now = this.dateObj.toLocaleDateString() + " at " + this.dateObj.toLocaleTimeString();
  
  constructor() { }

  ngOnInit(): void {}
}

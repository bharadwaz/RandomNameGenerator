import { Component, ViewChild } from '@angular/core';
import { DetailsComponent } from './details/details.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DetailsComponent)
  private dc:DetailsComponent;
  clicked:boolean;
  title = 'app';

  constructor(){
    this.clicked = false;
  }
  getName(){
    this.dc.getName();
  
  }
}

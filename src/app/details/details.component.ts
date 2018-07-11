import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  name:string;
  surname:string;
  gender:string;
  region:string;
  constructor(private ns:NamesService) { }

  ngOnInit() {
    this.getName();
  }

  getName(){
    this.ns.getNames().subscribe((resp)=>{
      this.name = resp['name'];
      this.surname = resp['surname'];
      this.gender = resp['gender'];
      this.region = resp['region']  
    });
  }
}

import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  /*@Output() option= new EventEmitter<string>();

  onMove(feature:string){

    this.option.emit(feature);
  }*/

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odd=[1,3,5];
  even=[2,4];
  show=false;
  value = 10;
  title = 'app';

  option='recipe';

  onNavigate(feature:string){

    this.option = feature;

  }
}

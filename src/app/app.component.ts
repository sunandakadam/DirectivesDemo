import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes=["Khiladi","Badshah","Shahenshah","Sultan"];
  i:number=0;
  toggled:boolean=true;
  selected:string;
  toggle(){
    this.toggled=!this.toggled;
  }

  select(hero){
    this.selected=hero;
  }
}

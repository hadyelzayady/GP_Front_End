import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { 
    }
    
  add_arduino(){
    let workArea = document.getElementById("workArea");
    var ard=document.createElement("app-arduino");
    workArea.appendChild(ard);
  }
  ngOnInit() {
    let btn = document.getElementById("arduino_btn");
    btn.addEventListener("click", (e:Event) => this.add_arduino());
 
  }

}

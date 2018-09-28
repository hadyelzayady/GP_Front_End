import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
var startPositionClickX;
var startPositionClickY; 
var middleclicked ;
var backgroundStyles ;
var workareaStyles ;
var  strtempx ;
var  strtempy ;   
   
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }
  @ViewChild('background') background: ElementRef;
  @ViewChild('workArea') workarea: ElementRef;
  ngOnInit() {
    
    // this.background.nativeElement.style.backgroundPosition ="0px 0px" ;
    // this.workarea.nativeElement.style.transform ="matrix(1, 0, 0, 1,0,0 )" ;
      
  }
  
  trigeringMovingBackground(event) {
    
    if(event.which==2){
     backgroundStyles = getComputedStyle(this.background.nativeElement);
     workareaStyles = getComputedStyle(this.workarea.nativeElement);
      middleclicked=true;
    event.preventDefault();
    startPositionClickX= event.clientX;
    startPositionClickY= event.clientY; 
    strtempx=backgroundStyles.backgroundPositionX;
    strtempy=backgroundStyles.backgroundPositionY;
  }
  }
  movingBackground(event) {
    if(middleclicked==true){
      // let tempx=this.background.nativeElement.style.backgroundPositionX;
      // let tempy=this.background.nativeElement.style.backgroundPositionY;
      // console.log('this.background',this.background);
      // console.log('this.workarea',this.workarea);

      // tempx+=startPositionClickX- event.clientX;
      // tempy+=startPositionClickX- event.clientX;
      // this.background.nativeElement.style.backgroundPosition = event.clientX +"px "+ event.clientY+"px" ;
      // this.workarea.nativeElement.style.transform ="matrix(1, 0, 0, 1," +event.clientX +","+ event.clientY+" )" ;
 
      
      // console.log("strtempx: "+strtempx+" strtempy: "+strtempy);
      // console.log("startPositionClickx: "+startPositionClickX+" startPositionClickY: "+startPositionClickY);
      strtempx.substring(0,strtempx.length-2) ; 
      strtempy.substring(0,strtempy.length-2) ;  

      //console.log('this.workarea',this.workarea);
      let tempx=parseInt(strtempx)-startPositionClickX+ (event.clientX);
      let tempy=parseInt(strtempy)-startPositionClickY+ (event.clientY);
      console.log("strtempx",strtempx);
      
      console.log("startPositionClickX",startPositionClickX);
      
      console.log( "clientx",(event.clientX));
      
      console.log( "diff",startPositionClickX- (event.clientX));
      this.background.nativeElement.style.backgroundPosition = tempx+"px "+ tempy+"px" ;
      // this.workarea.nativeElement.style.transform ="matrix(1, 0, 0, 1," +tempx +","+ tempy+" )" ;

      this.workarea.nativeElement.style.left =tempx +"px" ;

      this.workarea.nativeElement.style.top =tempy +"px" ;
   
   
  }
}
  stoppingMovingBackground(event) {
    if(event.which==2){
    middleclicked=false;
     startPositionClickX=0;
     startPositionClickY; 
     strtempx ;
     strtempy ;  
  
    }
  }
 
}




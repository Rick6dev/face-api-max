import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @ViewChild('videoElement') videoElement:any
@Input() stream:any;
@Input() width:number|any;
@Input() heigth:number|any;

constructor(){

}

loadedmetada():void{

}

listenerPlay():void{

}
}

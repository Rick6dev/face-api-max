import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentStream:any;
  ngOnInit(): void {
    this.checkMediaSource()
    
  }

  checkMediaSource = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      })
      .then(stream    => {
        this.currentStream = stream;   
        // Use the stream here, e.g., assign it to a video element
        // ...
  
        // Clean up the stream when no longer needed
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      })
      .catch(error => {
        console.error('Error accessing media devices:', error);
        alert('Error accessing camera. Please check your device settings.');
      });
    } else {
      alert('Your device does not have a camera.');
    }
  };
  
  }

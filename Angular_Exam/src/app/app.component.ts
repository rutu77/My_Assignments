import { Component, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Angular_Exam';

  @ViewChild(TimerComponent) timer!:TimerComponent;  

  // Clears any existing timer and starts a new timer
  start(){
    this.timer.startTimer()
  }
  
  // Clears any existing timer and pauses the timer
  pause(){
    this.timer.pauseTimer()
  }

  // Clears any existing timer and resets the timer
  reset(){
    this.timer.resetTimer()
  }
}

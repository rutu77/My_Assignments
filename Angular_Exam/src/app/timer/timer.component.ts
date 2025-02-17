import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: false,
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit, OnDestroy{
  timeElapsed:number=0
  timeOutId:any

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  startTimer() {
    this.clearTimer();
    this.runTimer();
    console.log("Timer Started")
  }

  runTimer() {
    this.timeOutId=setTimeout(()=> {
      this.timeElapsed+=1000;
      this.runTimer();
    },1000);
  }

  resetTimer(){
    this.clearTimer();
    this.timeElapsed=0;
    console.log("Timer has been resetted")
  }


  pauseTimer(){
    this.clearTimer();
    console.log("Timer Paused")
  }

  clearTimer(){
    if(this.timeOutId){
      clearTimeout(this.timeOutId)
    }
  }

}
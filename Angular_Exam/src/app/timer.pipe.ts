import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  standalone: false
})

export class TimerPipe implements PipeTransform {

  transform(value: number) {
    const seconds= Math.floor(value/1000);
    const minutes=Math.floor(seconds/60);
    
    const hours=Math.floor(minutes/60)

    return `${hours}h ${minutes%60}m ${seconds%60}s`;
    
  }
  
}

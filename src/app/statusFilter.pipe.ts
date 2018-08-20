import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'statusFilter'})
export class StatusFilter implements PipeTransform {
  transform(value: number): string {
    if(value == 1){
      return "Ligado";
    } else if(value == 0){
      return "Desligado";
    }
  }
}

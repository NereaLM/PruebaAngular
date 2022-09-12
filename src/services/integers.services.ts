import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntegerService {

  constructor() { }

  //Método para obtener los 100 primeros números enteros y devolverlos inyectados en el componente principal
  getIntegers() : number[]{
    let integers: number[] = [100];
    for (let index = 0; index < 101; index++) {
        integers[index] = index;        
    }
    return integers;
  }

}


import { filter, map, Observable, of, pipe } from 'rxjs';
import { IntegerService } from './../../services/integers.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  integers! : number[];
  number! : Observable<number>
  constructor(private integerService : IntegerService) { }


  ngOnInit(): void {
    //LLamada para obtener los enteros y pintarlos en la vista
    this.getIntegers();
    //Obtenemos los números pares y los mostramos por consola
    const nums = of(1,2,3,4,5,6,7,8,9,10);
    const pares = pipe(
      filter((n: number) => n % 2 == 0)
    );
    const squareOdd = pares(nums);
    squareOdd.subscribe(x => console.log(x));
  }
  //Recuperar números enteros del método inyectado
  getIntegers(){
    this.integers = this.integerService.getIntegers();
  }



}

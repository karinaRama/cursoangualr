import { Injectable } from '@angular/core';
import { AbstractItemsService} from "src/app/_services/abstract-items.service";
import { Observable } from "rxjs/internal/Observable";
import { Item} from "../../_modelo/Item";
@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {
items : Item[];
  constructor() { 
  
 super();
  this.items =[
         new Item("comprar carne"),
         new Item("comprar verdura"),
         new Item("comprar carbon") 

      ];
  }
   getItems():Observable<Item[]>{


  return new Observable ((observable) => {

       observable.next(this.items);
       observable.complete();


  });
  };

  }

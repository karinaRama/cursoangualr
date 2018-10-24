import { Injectable } from '@angular/core';
import {Item} from "../../_modelo/item";
import {Observable} from "rxjs/internal/Observable";
@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemsService {

  constructor() { }

abstract getItems():Observable<Item[]>;
}

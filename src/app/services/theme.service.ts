import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isHighConstrast: EventEmitter<any> = new EventEmitter()

  constructor() { }

  toggleHighConstrast(HC: boolean){
    this.isHighConstrast.emit(HC);
  }
}

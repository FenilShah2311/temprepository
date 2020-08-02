import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }
  getData(){
    return {
      name: 'Fenil',
      age:21,
      id:1
    }

  }
}

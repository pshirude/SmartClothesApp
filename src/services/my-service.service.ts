import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  favouriteClothes : any[] = [];
  constructor() { }

  // api to return current time 
  showDate(){
	return new Date();
  }
  
  getUserName(){
	return "prajakta";
  }
}

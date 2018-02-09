import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  favoriteClothes : any[]=[];
  constructor() { }

  // api to return current time 
  showDate(){
	return new Date();
  }
  
  markFavorite(cloth){
	alert('marked favorite from within service' + cloth.name);
	
	  
  }
  
  getUserName(){
	return "prajakta";
  }
}

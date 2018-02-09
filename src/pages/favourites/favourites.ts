import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {

  constructor(private myService:MyServiceService) {
  }
  
  ngOnInit() {
	this.todaysDate = this.myService.showDate();
  
  }
  
  markFav(cloth){
	alert('calling service method');
	this.myService.markFavorite(cloth);
  }
}

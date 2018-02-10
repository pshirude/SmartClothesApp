import { Component } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})

export class FavouritesPage implements OnInit {

  favoriteClothes : any[]=[];
  
  constructor(private myService:MyServiceService) {
	getFav();
  }
  
  ngOnInit() {
	this.todaysDate = this.myService.showDate();
  
  }
  
  getFav(){
		this.favoriteClothes = this.myService.favouriteClothes;
  }
}

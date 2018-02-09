import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApparelNamePage } from '../apparel-name/apparel-name';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'page-apparels',
  templateUrl: 'apparels.html'
})
export class ApparelsPage implements OnInit {

  clothCategory : any;
  clothesJSON : any;
  favouriteClothes : any[] = [];
  
	initializeItems() {
		this.clothesJSON = {
		"Formal Wear": [{
				"clothId":"F1",
				"name": "Black Shirt",
				"brand": "Van Huesen",
				"size": "30",
				"color":"Black",
				"image":"vanheusen_black_formal_shirt.jpg",
				"fav":false
				
			}, {
				"clothId":"F2",
				"name": "Gray Trouser",
				"brand": "Van Huesen",
				"size": "40",
				"color":"Gray",
				"image":"vanheusen_gray_formal_trouser.jpg",
				"fav":false
			} 
		],
		"Casual Wear": [{
				"clothId":"C1",
				"name": "Blue T-Shirt",
				"brand": "Polo",
				"size": "32",
				"color":"Blue",
				"image":"polo_blue_t.jpg",
				"fav":false
			}, {
				"clothId":"C1",
				"name": "Jeans",
				"brand": "Levis",
				"size": "40",
				"color":"Black",
				"image":"levis_jeans_blue.jpg",
				"fav":false
			} 
		]};
	}
	
	constructor(private myService:MyServiceService) { }
	
	ngOnInit()
	{
		this.initializeItems();
		this.clothCategory = Object.keys(this.clothesJSON);
	}
	
	loadApparelDetails(params){
		if (!params) params = {};
		this.navCtrl.push(ApparelNamePage);
	}

	markFav(cloth){
		this.favouriteClothes.push[cloth];
		alert('calling service method');
		this.myService.markFavorite(cloth);
	}

	/* searchCloth(ev: any) {

		alert('inside getItems');
		// this.initializeItems();
		// set val to the value of the searchbar
		let val = ev.target.value;

		// JSON.search(this.clothesJSON,'//*[contains(.,val)]');
	}*/
}

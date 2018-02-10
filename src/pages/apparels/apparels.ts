import { Component } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-apparels',
  templateUrl: 'apparels.html'
})
export class ApparelsPage implements OnInit {

   clothCategory : any;
   clothesJSON : any;
   users : any;
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
	
	constructor(public restProvider: RestProvider , public myService : MyServiceService) { 
		this.getUsers();
	}
	
	getUsers()
	{
		this.restProvider.getUsers()
		.then(data => {
			this.users = data;
			console.log(this.users);
		});
	}
	
	ngOnInit()
	{
		this.initializeItems();
		this.clothCategory = Object.keys(this.clothesJSON);
	}

	/* markFav(cloth){
		this.myService.favouriteClothes.push[cloth];
	} */

}

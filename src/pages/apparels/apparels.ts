import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApparelNamePage } from '../apparel-name/apparel-name';

@Component({
  selector: 'page-apparels',
  templateUrl: 'apparels.html'
})
export class ApparelsPage implements OnInit {

  clothCategory : any;
  clothesJSON : any;
  
	initializeItems() {
		this.clothesJSON = {
		"Formal Wear": [{
				"name": "Black Shirt",
				"brand": "Van Huesen",
				"size": "30",
				"color":"Black",
				"image":"vanheusen_black_formal_shirt.jpg"
				
			}, {
				"name": "Gray Trouser",
				"brand": "Van Huesen",
				"size": "40",
				"color":"Gray",
				"image":"vanheusen_gray_formal_trouser.jpg"
			} 
		],
		"Casual Wear": [{
				"name": "Blue T-Shirt",
				"brand": "Polo",
				"size": "32",
				"color":"Blue",
				"image":"polo_blue_t.jpg"
			}, {
				"name": "Jeans",
				"brand": "Levis",
				"size": "40",
				"color":"Black",
				"image":"levis_jeans_blue.jpg"
			} 
		]};
	}
	
	ngOnInit()
	{
		this.initializeItems();
		this.clothCategory = Object.keys(this.clothesJSON);
	}
	constructor(public navCtrl: NavController) { }

	loadApparelDetails(params){
		if (!params) params = {};
		this.navCtrl.push(ApparelNamePage);
	}

	markFav(){
		alert('marked fav..');
	}

	searchCloth(ev: any) {

		alert('inside getItems');
		// this.initializeItems();
		// set val to the value of the searchbar
		let val = ev.target.value;

		// JSON.search(this.clothesJSON,'//*[contains(.,val)]');
	}
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-scan-add',
  templateUrl: 'scan-add.html'
})
export class ScanAddPage {

  qrData ;
  scannedCode ;
  
  constructor(private barcodeScanner: BarcodeScanner,private restProvider:RestProvider) {
  }
  
  scanCode() {
	this.barcodeScanner.scan().then(barcodeData => {
		this.scannedCode = barcodeData.text;
		
	}, (err) => {
		console.log('Error: ', err);
	});
  }
  
  pushDataToTW(){ 
	console.log("calling service postData ")
	this.restProvider.postData().then(data => {
		console.log("data ::::::: "+ data);
	}, (err) => {
		console.log('Error: ', err);
	});
	
	/* this works
	console.log("calling service addUser ")
	this.restProvider.addUser('abc'); */
  }

}

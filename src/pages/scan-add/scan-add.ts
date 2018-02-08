import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-scan-add',
  templateUrl: 'scan-add.html'
})
export class ScanAddPage {

  qrData ;
  scannedCode ;
  
  constructor(private barcodeScanner: BarcodeScanner) {
  }
  
  scanCode() {
	alert('inside scancode');
	this.barcodeScanner.scan().then(barcodeData => {
		this.scannedCode = barcodeData.text;
	}, (err) => {
		console.log('Error: ', err);
	});
  }

}

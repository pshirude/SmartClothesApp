import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	constructor(public http: HttpClient) {
		console.log('Hello RestProvider Provider');
	}
	apiUrl = 'https://jsonplaceholder.typicode.com';
	
	serviceURL = 'http://dipatil2l1.ptcnet.ptc.com:8080/Thingworx/Things/RFID/Services/getTagHistory';
	serviceURL2 = 'http://dipatil2l1.ptcnet.ptc.com:8080/Thingworx/Things/RFID/Services/getTagHistory?appKey=79b87982-0cdb-4d2f-8e0c-08dbee31b247';
	/* credentials: {
			"username":'Administrator',
			"password":'admin'
	}; */
	
	//  let postParams = {some:'some', another:'some'};

	getUsers() {
		return new Promise(resolve => {
		this.http.get(this.apiUrl+'/users').subscribe(data => {
		  resolve(data);
		}, err => {
		  console.log(" err : " + err);
		});
		});
	}
	

	postData(){ 
		let header = new HttpHeaders();
		header = header.set('appKey', '79b87982-0cdb-4d2f-8e0c-08dbee31b247').set('Content-Type','application/json; charset=utf-8').set('Access-Control-Allow-Origin','*');
		console.log("inside service postData");
		return new Promise((resolve, reject) => {
			this.http.post(this.serviceURL,{header : header})
			  .subscribe(res => {
				resolve(data);
				console.log("happpppy : " + JSON.stringify(data));
			  }, (err) => {
				reject(" error : " + err);
			  });
		});
	}
	
	//dummy POST -working
	addUser(data) {
		console.log("inside service addUser");
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/users', JSON.stringify(data))
			  .subscribe(res => {
				resolve(res);
				console.log("happpppy : " + JSON.stringify(res));
			  }, (err) => {
				reject(err);
			  });
		});
	}

}

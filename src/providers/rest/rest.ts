import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

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
	
	
	
	/* credentials: {
			"username":'Administrator',
			"password":'admin'
	}; */
	
	//  let postParams = {some:'some', another:'some'};

	getUsers() {
		return new Promise(resolve => {
		this.http.post(this.apiUrl+'/users').subscribe(data => {
		  resolve(data);
		}, err => {
		  console.log(err);
		});
		});
	}
	
	getData(){
		console.log("inside service getData");
		this.http.post(this.serviceURL, {}, {
			headers: new HttpHeaders().set('appKey','79b87982-0cdb-4d2f-8e0c-08dbee31b247')
		  })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            console.log(err);
          });
		console.log("returning from server getData");
	}
	
	addUser(data) {
	  return new Promise((resolve, reject) => {
		this.http.post(this.apiUrl+'/users', JSON.stringify(data))
		  .subscribe(res => {
			resolve(res);
		  }, (err) => {
			reject(err);
		  });
	  });
	}

}

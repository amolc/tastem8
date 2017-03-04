import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import {Component, OnInit} from "@angular/core"

/*
  Generated class for the ApiAuthentication provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiAuthentication {

	// Listing Pages
    Category1: any;
    Category2: any;
    Category3: any;
    Category4: any;
    Category5: any;
    Category6: any;
    Category7: any;
    Category8: any;
    Category9: any;
    Category10: any;
    Category11: any;
    Category12: any;

    // Details Page
    details: any;


	constructor(public http: Http) {
		console.log('Hello ApiAuthentication Provider');
	}

	// Category pages 
	/////////////////////////////////////////////////////////////////////

	loadCategory1() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category1) {
	    // already loaded data
	    return Promise.resolve(this.Category1);
	  }

	  // don't have the data yet
	  return new Promise(resolve => {
	    // We're using Angular HTTP provider to request the data,
	    // then on the response, it'll map the JSON data to a parsed JS object.
	    // Next, we process the data and resolve the promise with the new data.
	    this.http.get(url + "&allowedAllergy[]=396^Dairy-Free&allowedAllergy[]=393^Gluten-Free&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        // we've got back the raw data, now generate the core schedule data
	        // and save the data for later reference
	        console.log(data);
	        this.Category1 = data.matches;
	        resolve(this.Category1);
	      });
	  });
	}

	loadCategory2() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category2) {
	    return Promise.resolve(this.Category2);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&maxTotalTimeInSeconds=1800&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category2 = data.matches;
	        resolve(this.Category2);
	      });
	  });
	}

	loadCategory3() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category3) {
	    return Promise.resolve(this.Category3);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedCourse[]=course^course-Desserts&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category3 = data.matches;
	        resolve(this.Category3);
	      });
	  });
	}

	loadCategory4() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	
	  if (this.Category4) {
	    return Promise.resolve(this.Category4);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedCuisine[]=cuisine^cuisine-thai&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category4 = data.matches;
	        resolve(this.Category4);
	      });
	  });
	}

	loadCategory5() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category5) {
	    return Promise.resolve(this.Category5);
	  }

	  // don't have the data yet
	  return new Promise(resolve => {
	    this.http.get(url + "&allowedDiet[]=391^Vegan&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category5 = data.matches;
	        resolve(this.Category5);
	      });
	  });
	}


	loadCategory6() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category6) {
	    return Promise.resolve(this.Category6);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedCuisine[]=cuisine^cuisine-american&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category6 = data.matches;
	        resolve(this.Category6);
	      });
	  });
	}

	loadCategory7() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category7) {
	    return Promise.resolve(this.Category7);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedCourse[]=course^course-Soups&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category7 = data.matches;
	        resolve(this.Category7);
	      });
	  });
	}

	loadCategory8() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category8) {
	    return Promise.resolve(this.Category8);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedHoliday[]=holiday^holiday-4th-of-july&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category8 = data.matches;
	        resolve(this.Category8);
	      });
	  });
	}

	loadCategory9() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category9) {
	    return Promise.resolve(this.Category9);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedCourse[]=course^course-Cocktails&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category9 = data.matches;
	        resolve(this.Category9);
	      });
	  });
	}

	loadCategory10() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category10) {
	    return Promise.resolve(this.Category10);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedCuisine[]=cuisine^cuisine-italian&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category10 = data.matches;
	        resolve(this.Category10);
	      });
	  });
	}

	loadCategory11() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category11) {
	    return Promise.resolve(this.Category11);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedCourse[]=course^course-Salads&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category11 = data.matches;
	        resolve(this.Category11);
	      });
	  });
	}

	loadCategory12() {
	  var url = "http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62";
	  
	  if (this.Category12) {
	    return Promise.resolve(this.Category12);
	  }

	  return new Promise(resolve => {
	    this.http.get(url + "&allowedDiet[]=392^Vegetarian&maxResult=50&start=10")
	      .map(res => res.json())
	      .subscribe(data => {
	        console.log(data);
	        this.Category12 = data.matches;
	        resolve(this.Category12);
	      });
	  });
	}

	// Details 
	/////////////////////////////////////////////////////////////////////

	loadDetails( id ) {
    console.log('load details  ' + id);
	let url = 'http://api.yummly.com/v1/api/recipe/'+id+'?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62';
    console.log(url)
	  return new Promise(resolve => {
		this.http.get(url)
	      .map(res => res.json())
		  .subscribe(data => {
		    console.log(data);
	        this.details = data;
	        resolve(this.details);
		  });
	  });
	}

	// Search 
	/////////////////////////////////////////////////////////////////////

	static get parameters() {
        return [[Http]];
    }

	searchRecipes(id){
	    let url = 'http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62&q=' + encodeURI(id);
        var response = this.http.get(url).map(res => res.json());
        return response;
	}

}

import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiAuthentication } from '../../providers/api-authentication'
import { Platform } from 'ionic-angular';
import { InAppBrowser, Geolocation } from 'ionic-native';
import { Category1Page } from '../category-1/category-1';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var google;

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [ApiAuthentication]

})
export class DetailsPage {
  // API
  /////////////////////////////////////////////////////////////////////
  public api: any;

  // Toggle 
  /////////////////////////////////////////////////////////////////////
  visible = false;
  public counter : number = 0;

  // ID
  /////////////////////////////////////////////////////////////////////
  public id;
  
  constructor(public navCtrl: NavController, private navParams: NavParams, public apiAuthentication: ApiAuthentication, private platform: Platform, private ngZone: NgZone) {
    this.loadRecipes(navParams.get('id'));
    console.log(navParams.get('id'));
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.loadMap();
  }

  // Like Toggle
  /////////////////////////////////////////////////////////////////////
  
  toggle() {
    this.visible = !this.visible;

    if (!this.visible) {
      this.counter -= 1;
    } else {
      this.counter += 1 
    }
  }

  // Extenal Link  
  /////////////////////////////////////////////////////////////////////

  launch(url) {
    this.platform.ready().then(() => {
      new InAppBrowser(url, '_system', 'location = yes');
    });
  }

  // Loading Recipes 
  /////////////////////////////////////////////////////////////////////

  loadRecipes( id ){
  
    this.apiAuthentication.loadDetails( id )
    .then(data => {
      this.api = data;
    });
  } 

  // Google MAp
  /////////////////////////////////////////////////////////////////////

  @ViewChild('map') mapElement: ElementRef;

  map: any;
 
  loadMap(){

    Geolocation.getCurrentPosition().then((position) => {

      // Define Locations 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      // Define Map Options
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      // Custom Pin for your locations
      let image = 'assets/icon/current-location.png';

      // Marker parameters
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: image,
        position: this.map.getCenter()
      });

      let content = "<h4>You are here!</h4>";          

      this.addInfoWindow(marker, content);

      // Google places API 
      let service = new google.maps.places.PlacesService(this.map);

      service.nearbySearch({
        location: latLng,
        radius: 5000,
        type: ['grocery_or_supermarket']
      }, (results, status) => {
          this.callback(results, status)
          console.log(results);
      });


    }, (err) => {
      console.log(err);
    });

  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  createMarker(place){
    var marker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, marker);
      });
    });
  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.ngZone.run(() => {
        infoWindow.open(this.map, marker);
      });
    });
  }

}

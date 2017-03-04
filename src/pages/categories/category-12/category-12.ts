import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiAuthentication} from '../../../providers/api-authentication'
import { DetailsPage } from '../../details/details';

/*
  Generated class for the Category12 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-12',
  templateUrl: 'category-12.html',
  providers: [ApiAuthentication]

})
export class Category12Page {
  public api: any;
  detailsPage = DetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiAuthentication: ApiAuthentication) {
  	this.loadRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category12Page');
  }

  loadRecipes(){
    this.apiAuthentication.loadCategory12()
    .then(data => {
      this.api = data;
    });
  } 
}

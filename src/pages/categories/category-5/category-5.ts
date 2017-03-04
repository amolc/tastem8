import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiAuthentication} from '../../../providers/api-authentication'
import { DetailsPage } from '../../details/details';

/*
  Generated class for the Category5 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-5',
  templateUrl: 'category-5.html',
  providers: [ApiAuthentication]

})
export class Category5Page {
  public api: any;
  detailsPage = DetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiAuthentication: ApiAuthentication) {
  	this.loadRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category5Page');
  }

  loadRecipes(){
    this.apiAuthentication.loadCategory5()
    .then(data => {
      this.api = data;
    });
  } 
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiAuthentication} from '../../../providers/api-authentication'
import { DetailsPage } from '../../details/details';

/*
  Generated class for the Category1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-1',
  templateUrl: 'category-1.html',
  providers: [ApiAuthentication]
})

export class Category1Page {
  public api: any;
  detailsPage = DetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiAuthentication: ApiAuthentication) {
  	this.loadRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category1Page');
  }

  loadRecipes(){
    this.apiAuthentication.loadCategory1()
    .then(data => {
      this.api = data;
    });
  } 

  goToDetails(id) {
    this.navCtrl.push(DetailsPage, {id: id});
  }
}

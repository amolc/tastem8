import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Category1Page } from '../categories/category-1/category-1';
import { Category2Page } from '../categories/category-2/category-2';
import { Category3Page } from '../categories/category-3/category-3';
import { Category4Page } from '../categories/category-4/category-4';
import { Category5Page } from '../categories/category-5/category-5';
import { Category6Page } from '../categories/category-6/category-6';
import { Category7Page } from '../categories/category-7/category-7';
import { Category8Page } from '../categories/category-8/category-8';
import { Category9Page } from '../categories/category-9/category-9';
import { Category10Page } from '../categories/category-10/category-10';
import { Category11Page } from '../categories/category-11/category-11';
import { Category12Page } from '../categories/category-12/category-12';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  category1Page = Category1Page;
  category2Page = Category2Page;
  category3Page = Category3Page;
  category4Page = Category4Page;
  category5Page = Category5Page;
  category6Page = Category6Page;
  category7Page = Category7Page;
  category8Page = Category8Page;
  category9Page = Category9Page;
  category10Page = Category10Page;
  category11Page = Category11Page;
  category12Page = Category12Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


}

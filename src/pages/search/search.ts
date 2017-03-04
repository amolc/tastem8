import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiAuthentication} from '../../providers/api-authentication'
import { DetailsPage } from '../details/details';
import {Http} from "@angular/http"

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [ApiAuthentication]
})

export class SearchPage {

  detailsPage = DetailsPage;
  highlightedDiv: number;
  highlightedDiv2: number;
  highlightedDiv3: number;
  highlightedDiv4: number;
  highlightedDiv5: number;
  highlightedDiv6: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiAuthentication: ApiAuthentication, private http: Http) {
    this.selectedDiets = new Array(this.diets.length).fill(false);
    this.selectedAllergies = new Array(this.allergies.length).fill(false);
    this.selectedCuisines = new Array(this.cuisines.length).fill(false);
    this.selectedCourses = new Array(this.courses.length).fill(false);
    this.selectedHolidays = new Array(this.holidays.length).fill(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  recipes: any;
 
    searchRecipeDB(event, key) {
        if(event.target.value.length > 2) {
            this.apiAuthentication.searchRecipes(event.target.value).subscribe(
                data => {
                    this.recipes = data.matches; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Recipe Search Complete')
            );
        }
    }

   toggleClass(newValue: number) {
    if (this.highlightedDiv === newValue) {
      this.highlightedDiv = 0;
    }
    else {
      this.highlightedDiv = newValue;
    }
  }

   toggle(newValue: number) {
    if (this.highlightedDiv2 === newValue) {
      this.highlightedDiv2 = 0;
    }
    else {
      this.highlightedDiv2 = newValue;
    }
  }

   toggleA(newValue: number) {
    if (this.highlightedDiv3 === newValue) {
      this.highlightedDiv3 = 0;
    }
    else {
      this.highlightedDiv3 = newValue;
    }
  }
  
   toggleB(newValue: number) {
    if (this.highlightedDiv4 === newValue) {
      this.highlightedDiv4 = 0;
    }
    else {
      this.highlightedDiv4 = newValue;
    }
  }

   toggleC(newValue: number) {
    if (this.highlightedDiv5 === newValue) {
      this.highlightedDiv5 = 0;
    }
    else {
      this.highlightedDiv5 = newValue;
    }
  }

   toggleD(newValue: number) {
    if (this.highlightedDiv6 === newValue) {
      this.highlightedDiv6 = 0;
    }
    else {
      this.highlightedDiv6 = newValue;
    }
  }

  diets: Array<string> = ['lacto-vegetarian', 'ovo-vegetarian', 'paleoPescetarian', 'vegan', 'vegetarian'];
  allergies: Array<string> = ['dairy-free', 'egg-free', 'gluten-free', 'peanut-free', 'seafood-free', 'sesame-free', 'soy-free', 'sulfite-free', 'tree nut-free', 'wheat-free'];
  cuisines: Array<string> = ['american', 'italian', 'asian', 'mexican', 'southern & soul food', 'french', 'southwestern', 'barbecue', 'indian', 'chinese', 'cajun & creole', 'english', 'mediterranean', 'greek', 'spanish', 'german', 'thai', 'moroccan', 'irish', 'japanese', 'cuban', 'hawaiin', 'swedish', 'hungarian', 'portugese']; 
  courses: Array<string> = ['main dishes', 'sesserts', 'side dishes', 'lunch and snacks', 'appetizers', 'salads', 'breads', 'breakfast and brunch', 'Soups', 'Beverages', 'Condiments and Sauces', 'Cocktails']; 
  holidays: Array<string> = ['christmas', 'summer', 'thanksgiving', 'new Year','super bowl / game day', 'halloween', 'hanukkah', '4th of july']; 


  id: number = 3;
  selectedAllergies: Array<boolean>;
  allowedAllergy: Array<string>;
  selectedDiets: Array<boolean>;
  allowedDiet: Array<string>;
  selectedCuisines: Array<boolean>;
  allowedCuisine: Array<string>;
  selectedCourses: Array<boolean>;
  allowedCourse: Array<string>;
  selectedHolidays: Array<boolean>;
  allowedHoliday: Array<string>;
  url: string;

  submit()
    {
        this.processAllergy();
        this.processDiets();
        this.processCuisines();
        this.processCourses();
        this.processHolidays();
        this.searchRecipes(this.id, this.allowedAllergy, this.allowedDiet, this.allowedCuisine, this.allowedCourse, this.allowedHoliday);
    }

    processAllergy()
    {

        this.allowedAllergy = this.selectedAllergies.reduce((selectedList: Array<string>, isSelected: boolean, index: number) =>
        {
            return isSelected ? [...selectedList, this.allergies[index]] : selectedList;
        }, [])

    }

    processDiets()
    {
        this.allowedDiet = this.selectedDiets.reduce((selectedList: Array<string>, isSelected: boolean, index: number) =>
        {
            return isSelected ? [...selectedList, this.diets[index]] : selectedList;
        }, [])

    }

    processCuisines()
    {
        this.allowedCuisine = this.selectedCuisines.reduce((selectedList: Array<string>, isSelected: boolean, index: number) =>
        {
            return isSelected ? [...selectedList, this.cuisines[index]] : selectedList;
        }, [])

    }

    processCourses()
    {
        this.allowedCourse = this.selectedCourses.reduce((selectedList: Array<string>, isSelected: boolean, index: number) =>
        {
            return isSelected ? [...selectedList, this.courses[index]] : selectedList;
        }, [])

    }

    processHolidays()
    {
        this.allowedHoliday = this.selectedHolidays.reduce((selectedList: Array<string>, isSelected: boolean, index: number) =>
        {
            return isSelected ? [...selectedList, this.holidays[index]] : selectedList;
        }, [])

    }

    searchRecipes(id,
                  allowedAllergy: Array<string>,
                  allowedDiet: Array<string>,
                  allowedCuisine: Array<string>,
                  allowedCourse: Array<string>,
                  allowedHoliday: Array<string>)
    {


        this.url = 'http://api.yummly.com/v1/api/recipes?_app_id=397aed16&_app_key=69e2565adcec7a6609b18bef31261e62&q=' + encodeURI(id.toString());


        if (allowedAllergy.length)
        {
            this.url = this.url + `&allowedAllergy[]=${(allowedAllergy.toString())}`
        }
        if (allowedDiet.length)
        {
            this.url = this.url + `&allowedDiet[]=${(allowedDiet.toString())}`
        }
        if (allowedCuisine.length)
        {
            this.url = this.url + `&allowedCuisine[]=cuisine^cuisine-${encodeURI(allowedCuisine.toString())}`
        }
        if (allowedCourse.length)
        {
            this.url = this.url + `&allowedCourse[]=course^course-${encodeURI(allowedCourse.toString())}`
        }
        if (allowedHoliday.length)
        {
            this.url = this.url + `&allowedHoliday[]=holiday^holiday-${encodeURI(allowedHoliday.toString())}`
        }

        console.log(this.url);
          return this.http.get(this.url).map(res => res.json());
    }
}

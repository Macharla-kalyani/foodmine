import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  //from backend data get as observable 
  getAll():Observable<Food[]>{

    //return sample_foods;
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodBySearchTerm(searchTerm:string){
    //return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+searchTerm);
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  getAllFoodsByTag(tag:string):Food[]
  {
    return tag=="ALL"?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag));
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food=>food.id==foodId) ?? new Food();
  }
}

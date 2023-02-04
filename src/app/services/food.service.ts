import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_URL, FOOD_BY_SEARCH_URL, FOOD_BY_TAG_URL,FODDS_TAGS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor( private http:HttpClient) { }
  getAll():Observable<Food[]>{
    // return sample_foods;
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodBySearchTerm(searchTerm:string):Observable< Food[]>{
    //return this.getAll().filter(food=>food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL+searchTerm);
  } 
  getAllTags():Observable< Tag[]>{
    //return sample_tags;
    return this.http.get<Tag[]>(FODDS_TAGS_URL);
  }
  getAllFoodByTags(tag:string):Observable< Food[]>{
    //return tag==="All"?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));
    return this.http.get<Food[]>(FOOD_BY_TAG_URL+tag);
  }
  getFoodById(foodId:string):Observable< Food>{
    //return this.getAll().find(food=>food.id==foodId) ?? new Food(); 
    return this.http.get<Food>(FOOD_BY_ID_URL+foodId);
  }
}

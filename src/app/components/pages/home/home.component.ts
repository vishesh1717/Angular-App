import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];
  constructor(private foodService:FoodService,activatedRoute:ActivatedRoute) { 
    let foodsOberservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        foodsOberservable=this.foodService.getAllFoodBySearchTerm(params['searchTerm']);
      }
      else if(params['tag']){
        foodsOberservable=this.foodService.getAllFoodByTags(params['tag']);
      }
      else{
        foodsOberservable=foodService.getAll();

      }
      foodsOberservable.subscribe((serverFoods)=>{
        this.foods=serverFoods;
      })
    })
  }

  ngOnInit(): void {
  }


}

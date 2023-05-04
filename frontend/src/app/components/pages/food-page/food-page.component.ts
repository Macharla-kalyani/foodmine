import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute,private cartService:CartService,private router:Router){
      activatedRoute.params.subscribe(
        (params)=>{
          if(params.id)
            this.food=foodService.getFoodById(params.id);
        }
      )
  }
  ngOnInit():void{

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}

import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    this.tags=foodService.getAllTags();
  }
  ngOnInit():void{

  }

}

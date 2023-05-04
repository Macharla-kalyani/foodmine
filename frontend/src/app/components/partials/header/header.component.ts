import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

// type NewType = UserService;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity=0;
  // user!:User;
  constructor(cartService:CartService,
    // private userService:NewType
    ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    // userService.userObservable.subscribe((newUser) => {
    //   this.user = newUser;
    // })
   }

  ngOnInit(): void {
  }

  // logout(){
  //   this.userService.logout();
  // }

  // get isAuth(){
  //   return this.user.token;
  // }

}

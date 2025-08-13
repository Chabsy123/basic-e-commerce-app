import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  // encapsulate styles which cannot be used outside the component
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
    <button class="text-xl" routerLink="/">My Store</button>
  <!-- making a square brackets signify a dynamic expression -->
  <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'" routerLink="/cart" />
</div> `,
    //  changing the content here will also update the header in the UI
  styles: `

  `,
})
export class HeaderComponent {

  // signals are better for dynamic data and when calling call like a function
  // we can use interpolation here to display the title but its better to use signal in todays code cause its highly reactive keeping track of where its used.
  // you can declare signal
  // access value using ()
  // change using .set(newValue)
    // cart = signal('Cart');


  // showButtonClicked(){
  //   console.log('clicked');
  // }
  cartService = inject(CartService);
    //  services serve the functionality in one place to be used in other places
    // cartLabel = computed(() => `Cart (${this.cartService.cart().length})`);
}

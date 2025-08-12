import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  // encapsulate styles which cannot be used outside the component
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md"><span>My Store</span></div> `,
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
}

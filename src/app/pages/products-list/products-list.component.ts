import { Component, signal } from '@angular/core';
import { product } from '../../model/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id){
     <app-product-card [product]="product"/>
    }
  </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  // async ngOnInit(){
  //   const res = await fetch(
  //     'https://fakestoreapi.com/products/category/electronics'
  //   );
  //   const data = await res.json();
  //   this.products.set(data);
  // }
  products = signal<product[]>([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: '/assets/Fjallraven - Foldsack No. 1 Backpack,.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        '/assets/Mens Casual Premium Slim Fit T-Shirts.jpg',
      stock: 0,
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      image: '/assets/Mens Cotton Jacket.jpg',
      stock: 5,
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      image: '/assets/Mens Casual Slim Fit.jpg',
      stock: 7,
    },
  {
    id: 4,
    title: 'Urban Explorer Jacket',
    price: 29.99,
    image: '/assets/Urban Explorer Jacket.jpg',
    stock: 10,
  },
  {
    id: 5,
    title: 'Classic Streetwear Hoodie',
    price: 34.5,
    image: '/assets/Classic Streetwear Hoodie.jpg',
    stock: 15,
  },
  {
    id: 6,
    title: 'Denim Flex Jeans',
    price: 42.75,
    image: '/assets/Denim Flex Jeans.jpg',
    stock: 8,
  },
  {
    id: 7,
    title: 'Vintage Leather Boots',
    price: 59.99,
    image: '/assets/Vintage Leather Boots.jpg',
    stock: 5,
  },
  {
    id: 8,
    title: 'Cotton Crew Neck Tee',
    price: 12.99,
    image: '/assets/Cotton Crew Neck Tee.jpg',
    stock: 0,
  },
  {
    id: 9,
    title: 'All-Weather Windbreaker',
    price: 47.5,
    image: '/assets/All-Weather Windbreaker.jpg',
    stock: 12,
  },
  {
    id: 10,
    title: 'Slim Fit Chinos',
    price: 38.0,
    image: '/assets/Slim Fit Chinos.jpg',
    stock: 11,
  },
  {
    id: 11,
    title: 'Thermal Layer Shirt',
    price: 24.99,
    image: '/assets/Thermal Layer Shirt.jpg',
    stock: 0,
  },
  {
    id: 12,
    title: 'Modern Office Blazer',
    price: 65.5,
    image: '/assets/Modern Office Blazer.jpg',
    stock: 6,
  },
  {
    id: 13,
    title: 'Canvas Everyday Sneakers',
    price: 49.99,
    image: '/assets/Canvas Everyday Sneakers.jpg',
    stock: 14,
  },
  {
    id: 14,
    title: 'Heavy-Duty Work Pants',
    price: 39.0,
    image: '/assets/Heavy-Duty Work Pants.jpg',
    stock: 0,
  },
  {
    id: 15,
    title: 'Fleece Zip-Up Jacket',
    price: 27.49,
    image: '/assets/Fleece Zip-Up Jacket.jpg',
    stock: 13,
  },
  {
    id: 16,
    title: 'Relaxed Fit Cargo Shorts',
    price: 22.99,
    image: '/assets/Relaxed Fit Cargo Shorts.jpg',
    stock: 0,
  },
  {
    id: 17,
    title: 'Premium Cotton Socks (Pack of 5)',
    price: 14.99,
    image: '/assets/Premium Cotton Socks (Pack of 5).jpg',
    stock: 25,
  },
  {
    id: 18,
    title: 'Athletic Running Shorts',
    price: 19.99,
    image: '/assets/Athletic Running Shorts.jpg',
    stock: 16,
  },
  {
    id: 19,
    title: 'Lightweight Linen Shirt',
    price: 33.25,
    image: '/assets/Lightweight Linen Shirt.jpg',
    stock: 7,
},
    ]);
  }

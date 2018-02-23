import { Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { SearchComponent } from './search/search.component';
import { RoutesComponent } from './routes/routes.component';
import { ProductsComponent } from './products/products.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SignupComponent } from './components/auth/signup/signup.component';

export const RouterConfig: Routes = [
  {path: '', component:  BlogComponent},
  {path: 'search', component:  SearchComponent },
  {path: 'routes', component: RoutesComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'jokes', component: JokeListComponent },
  {path: 'carousel', component: CarouselComponent },
  {path: 'signup', component: SignupComponent }
];

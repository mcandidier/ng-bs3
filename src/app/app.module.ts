import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { SearchComponent } from './search/search.component';
import { RoutesComponent } from './routes/routes.component';

import { RouterConfig } from './app.routes';
import { ProductsComponent } from './products/products.component';
import { ProductListingComponent } from './products/product-listing.component'; 
import { ProductDetailComponent } from './products/product.detail.component';
import { ProductUpdateComponent } from './products/product.update.component';


import { ProductService } from './products/product.service';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIntercatorsComponent } from './components/carousel-intercators/carousel-intercators.component';
import { CcCardHoverDirective } from './directives/cc-card-hover.directive';
import { CcRollOverDirective } from './directives/cc-roll-over.directive';
import { SignupComponent } from './components/auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BlogComponent,
    SearchComponent,
    RoutesComponent,
    ProductsComponent,
    ProductListingComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CarouselComponent,
    CarouselItemComponent,
    CarouselIntercatorsComponent,
    CcCardHoverDirective,
    CcRollOverDirective,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RouterConfig, {useHash: true})
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './Components/cuisine/cuisine.component';
import { ItemComponent } from './Components/item/item.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SubCuisineComponent } from './Components/sub-cuisine/sub-cuisine.component';
import { SelectItemComponent } from './Components/select-item/select-item.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { FooterComponent } from './Components/footer/footer.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cuis',
    pathMatch: 'full',
  },

  {
    path: 'cuis',
    component: CuisineComponent,
  },
  {
    path: 'log',
    component: LogInComponent,
  },
  {
    path: 'reg',
    component: SignUpComponent,
  },
  {
    path: 'sub/:id',
    component: SubCuisineComponent,
  },
  {
    path: 'select/:id/:sub_id',
    component: SelectItemComponent,
  },
  {
    path: 'item/:id/:sub_id/:Dish_id',
    component: ItemComponent,
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'cart',
    component:CartPageComponent,
    canActivate:[AuthGuardGuard]
  },
  // {
  //   path:'contact',
  //   component:ContactComponent
  // },
  {
    path:'checkout',
    component:CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SearchPipe } from './Pipes/search.pipe';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { CuisineComponent } from './Components/cuisine/cuisine.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubCuisineComponent } from './Components/sub-cuisine/sub-cuisine.component';
import { ItemComponent } from './Components/item/item.component';
import { SelectItemComponent } from './Components/select-item/select-item.component';
import { StaticService } from './Service/static.service';
import { MethodService } from './Service/method.service';
import { StoreService } from './Service/store.service';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from './Service/cart.service';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './Components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchPipe,
    SignUpComponent,
    LogInComponent,
    CuisineComponent,
    SubCuisineComponent,
    ItemComponent,
    SelectItemComponent,
    CartPageComponent,
    ContactComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
    
  ],
  providers: [StaticService,MethodService,StoreService,CartService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

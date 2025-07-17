import { Routes } from '@angular/router';
import { LoginComponent } from './user-privacy/login/login.component';
import { RegisterComponent } from './user-privacy/register/register.component';
import { NavbarComponent } from './productdata/navbar/navbar.component';
import { ProductpageComponent } from './seller/productpage/productpage.component';
import path from 'path';
import { SellerDashboardComponent } from './seller/sellerdashboard/sellerdashboard.component';
import { DashboardComponent } from './seller/dashboard/dashboard.component';
import { OrderdetailsComponent } from './seller/orderdetails/orderdetails.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { HomePageOverviewComponent } from './home-page-overview/home-page-overview.component';
import { FooterComponent } from './productdata/footer/footer.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { AddcartComponent } from './addcart/addcart.component';
import { BuynowComponent } from './buynow/buynow.component';

export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'homepage', component: HomePageOverviewComponent },
  { path: 'sellerdashboard', component: SellerDashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orderdetails', component: OrderdetailsComponent },
  { path: 'seller-home', component: SellerHomeComponent },
  { path: 'seller-register', component: SellerRegisterComponent },
  { path: 'seller-login', component: SellerLoginComponent },
  { path: 'addcart', component: AddcartComponent },
  { path: 'buy-now', component: BuynowComponent },

  { path: '**', redirectTo: '/homepage' },
];

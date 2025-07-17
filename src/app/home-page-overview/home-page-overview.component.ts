import { Component } from '@angular/core';
import { NavbarComponent } from '../productdata/navbar/navbar.component';
import { HomepageComponent } from '../productdata/homepage/homepage.component';
import { SecondcartComponent } from '../productdata/secondcart/secondcart.component';
import { ThirdPagecartComponent } from '../productdata/third-pagecart/third-pagecart.component';
import { WearsComponent } from '../productdata/wears/wears.component';
import { MobilepageComponent } from '../productdata/mobilepage/mobilepage.component';
import { MobileoffersComponent } from '../productdata/mobileoffers/mobileoffers.component';
import { ToastMessageComponent } from '../toast-message/toast-message.component';
import { FooterComponent } from '../productdata/footer/footer.component';

@Component({
  selector: 'app-home-page-overview',
  imports: [
    NavbarComponent,
    HomepageComponent,
    SecondcartComponent,
    ThirdPagecartComponent,
    WearsComponent,
    MobilepageComponent,
    MobileoffersComponent,
    ToastMessageComponent,
    FooterComponent,
  ],
  templateUrl: './home-page-overview.component.html',
  styleUrl: './home-page-overview.component.scss',
})
export class HomePageOverviewComponent {}

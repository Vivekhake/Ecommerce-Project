import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { NavbarComponent } from './productdata/navbar/navbar.component';
import { HomepageComponent } from './productdata/homepage/homepage.component';
import { SecondcartComponent } from './productdata/secondcart/secondcart.component';
import { ThirdPagecartComponent } from './productdata/third-pagecart/third-pagecart.component';
import { WearsComponent } from './productdata/wears/wears.component';
import { MobilepageComponent } from './productdata/mobilepage/mobilepage.component';
import { MobileoffersComponent } from './productdata/mobileoffers/mobileoffers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'login';
}

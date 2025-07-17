import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondcart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondcart.component.html',
  styleUrl: './secondcart.component.scss',
})
export class SecondcartComponent implements OnInit {
  sectionOneProducts: any[] = [];
  sectionTwoProducts: any[] = [];
  sectionThreeProducts: any[] = [];

  ngOnInit(): void {
    this.sectionOneProducts = [
      {
        id: 1,
        name: 'OnePlus Nord Buds CE',
        price: 1499,
        image:
          'https://rukminim2.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60',
        description: 'True Wireless Earbuds with Clear Sound',
      },
      {
        id: 2,
        name: 'Sony Bluetooth Speaker',
        price: 4999,
        image:
          'https://rukminim1.flixcart.com/image/240/240/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60',
        description: 'Portable Waterproof Speaker with Extra Bass',
      },
      {
        id: 1,
        name: 'OnePlus Nord Buds CE',
        image:
          'https://rukminim1.flixcart.com/image/420/420/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=60',
        description: 'True Wireless Earbuds with Clear Sound',
      },
      {
        id: 2,
        name: 'Sony Bluetooth Speaker',
        image:
          'https://rukminim1.flixcart.com/image/420/420/krntoy80/headphone/j/l/n/ydjc01jy-mi-original-imag5egze7eb9taj.jpeg?q=60',
        description: 'Portable Waterproof Speaker with Extra Bass',
      },
    ];

    this.sectionTwoProducts = [
      {
        id: 1,
        name: 'Fire-Boltt Smartwatch',
        image:
          'https://rukminim1.flixcart.com/image/240/240/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=60',
        description: 'Fitness Tracker with Heart Rate Monitor',
      },
      {
        id: 2,
        name: 'boAt Smartwatch Xtend',
        image:
          'https://rukminim1.flixcart.com/image/240/240/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=60',
        description: 'Alexa Built-in, Multiple Sports Modes',
      },
      {
        id: 3,
        name: 'Fire-Boltt Smartwatch',
        image:
          'https://rukminim1.flixcart.com/image/240/240/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=60',
        description: 'Fitness Tracker with Heart Rate Monitor',
      },
      {
        id: 4,
        name: 'boAt Smartwatch Xtend',
        image:
          'https://rukminim1.flixcart.com/image/240/240/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=60',
        description: 'Alexa Built-in, Multiple Sports Modes',
      },
    ];
    this.sectionThreeProducts = [
      {
        id: 1,
        name: 'Fire-Boltt Smartwatch',
        image:
          'https://rukminim1.flixcart.com/image/420/420/xif0q/attar/k/j/g/shanaya-attar-arabic-french-blend-non-alcoholic-roll-on-original-imahbt5ymxyhng5u.jpeg?q=60',
        description: 'Fitness Tracker with Heart Rate Monitor',
      },
      {
        id: 2,
        name: 'boAt Smartwatch Xtend',
        image:
          'https://rukminim1.flixcart.com/image/420/420/xif0q/computer/l/g/c/-original-imahcd9d4ehhuwgz.jpeg?q=60',
        description: 'Alexa Built-in, Multiple Sports Modes',
      },
      {
        id: 3,
        name: 'Fire-Boltt Smartwatch',
        image:
          'https://rukminim1.flixcart.com/image/420/420/xif0q/trimmer/t/g/w/0-5-12-mm-new-professional-heavy-duty-rechargeable-trimmer-for-original-imahfyn3xs44vcuf.jpeg?q=60',
        description: 'Fitness Tracker with Heart Rate Monitor',
      },
      {
        id: 4,
        name: 'boAt Smartwatch Xtend',
        image:
          'https://rukminim1.flixcart.com/image/240/240/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=60',
        description: 'Alexa Built-in, Multiple Sports Modes',
      },
    ];
  }
}

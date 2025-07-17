import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobileoffers',
  imports: [CommonModule],
  templateUrl: './mobileoffers.component.html',
  styleUrl: './mobileoffers.component.scss',
})
export class MobileoffersComponent implements OnInit {
  sectionOneProducts: any[] = [];
  sectionTwoProducts: any[] = [];
  sectionThreeProducts: any[] = [];

  ngOnInit(): void {
    this.sectionOneProducts = [
      {
        id: 1,
        name: 'vivo T4x 5G',
        price: 1499,
        image:
          'https://rukminim1.flixcart.com/image/420/420/xif0q/mobile/j/t/v/-original-imahavdv28z4nrkn.jpeg?q=60',
        description: 'vivo T4x 5G (Pronto Purple, 128 GB)',
      },
      {
        id: 2,
        name: 'Samsung Galaxy A35 5G ',
        price: 4999,
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/t/z/-original-imahbzkz6gyfadqj.jpeg?q=70',
        description: 'Samsung Galaxy A35 5G(Awesome Lilac)',
      },
      {
        id: 1,
        name: 'Tecno Spark Go 2',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/6/j/-original-imahdem8fvcktgv3.jpeg?q=70',
        description: 'Tecno Spark Go 2 (Veil White, 64 GB)',
      },
      {
        id: 2,
        name: 'Samsung Galaxy F16 5G',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/p/-original-imahcre2gqhfqgd8.jpeg?q=70',
        description: 'Samsung Galaxy F16 5G (Vibing Blue)',
      },
    ];

    this.sectionTwoProducts = [
      {
        id: 1,
        name: 'REDMI A3X ',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/b/s/-original-imah2hfpqxjnkvts.jpeg?q=70',
        description: 'REDMI A3X (Olive Green, 64 GB)',
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 5G',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/n/9/-original-imahcfwmchscq6fk.jpeg?q=70',
        description: 'Samsung Galaxy S24 5G (Onyx Black)',
      },
      {
        id: 3,
        name: 'Apple iPhone 16',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70',
        description: 'Apple iPhone 16 (Teal, 256 GB)',
      },
      {
        id: 4,
        name: 'Apple iPhone 15',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70',
        description: 'Apple iPhone 15 (Pink, 128 GB)',
      },
    ];
    this.sectionThreeProducts = [
      {
        id: 1,
        name: 'OnePlus Nord CE4 lite 5G',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/n/d/-original-imah5wxzxbsymj4j.jpeg?q=70',
        description: 'OnePlus Nord CE4 lite 5G (ULTRA ORANGE)',
      },
      {
        id: 2,
        name: 'OnePlus 13R 5G ',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/1/5/-original-imah8vc2a8dg7xea.jpeg?q=70',
        description: 'OnePlus 13R 5G (Nebula Noir, 512 GB)',
      },
      {
        id: 3,
        name: 'OnePlus Nord CE 3 Lite 5G',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/p/d/nord-ce-3-lite-5g-cph2467-oneplus-original-imah4ehbgmz4qzhz.jpeg?q=70',
        description: 'OnePlus Nord CE 3 Lite 5G (Pastel Lime)',
      },
      {
        id: 4,
        name: 'OnePlus N20 SE',
        image:
          'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/2/s/n20-se-cph2469-oneplus-original-imah8h86fkhrnxz8.jpeg?q=70',
        description: 'OnePlus N20 SE (JADE WAVE, 128 GB)',
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css'],
})
export class PortfolioCardComponent implements OnInit {
  imagesList: string[] = [
    '../../../assets/images/cabin.png',
    '../../../assets/images/cake.png',
    '../../../assets/images/circus.png',
    '../../../assets/images/game.png',
    '../../../assets/images/safe.png',
    '../../../assets/images/submarine.png',
  ];

  clickedImageSrc: string = '';
  getImgSrc(e: any) {
    try {
      this.clickedImageSrc = e.path[1].childNodes[0].childNodes[0].src;
    } catch (exception) {
      this.clickedImageSrc =
        e.path[1].offsetParent.childNodes[0].childNodes[0].src;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

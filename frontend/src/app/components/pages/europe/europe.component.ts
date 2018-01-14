import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.less']
})
export class EuropeComponent implements OnInit {

mainImage: HTMLImageElement;
img: HTMLImageElement;

  constructor() { }

  ngOnInit() {
  }

  changeImage(imageId, mainImageId){
  this.img = document.getElementById(imageId) as HTMLImageElement;
  this.mainImage = document.getElementById(mainImageId) as HTMLImageElement;
  this.mainImage.src = this.img.src;
  }

}

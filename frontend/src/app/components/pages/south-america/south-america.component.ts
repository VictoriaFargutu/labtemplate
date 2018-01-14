import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-south-america',
  templateUrl: './south-america.component.html',
  styleUrls: ['./south-america.component.less']
})
export class SouthAmericaComponent implements OnInit {

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

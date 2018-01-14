import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.less']
})
export class AsiaComponent implements OnInit {

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

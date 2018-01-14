import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.less']
})
export class AfricaComponent implements OnInit {

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

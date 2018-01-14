import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antarctica',
  templateUrl: './antarctica.component.html',
  styleUrls: ['./antarctica.component.less']
})
export class AntarcticaComponent implements OnInit {

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

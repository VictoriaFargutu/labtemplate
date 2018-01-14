import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-north-america',
  templateUrl: './north-america.component.html',
  styleUrls: ['./northAmericaCSS.css']
})
export class NorthAmericaComponent implements OnInit {

mainImage: HTMLImageElement;
img: HTMLImageElement;

  constructor() { }

  ngOnInit() {
  }

  changeImage(imageId){
  this.img = document.getElementById(imageId) as HTMLImageElement;
  this.mainImage = document.getElementById('mainImage') as HTMLImageElement;
  this.mainImage.src = this.img.src;
  }

}

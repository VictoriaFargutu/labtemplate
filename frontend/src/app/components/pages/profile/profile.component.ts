import { Component, OnInit } from '@angular/core';
import { FileUploaderModule } from "ng4-file-upload/file-uploader.module";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.css'],
  
  
})
export class ProfileComponent implements OnInit {

   myFileSelected:any;
  constructor() { }

  ngOnInit() {
  }
  
  fileuploaderFileChange(files: FileList){
    this.myFileSelected = files[0];
    alert(this.myFileSelected.name);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  objectURL: string;

  constructor() { }

  ngOnInit() {
  }
  Addfile(event:any){
const file =event.target.files[0]
var blob = new Blob([file]);
this.objectURL = URL.createObjectURL(blob);
console.log(this.objectURL)
  }
}

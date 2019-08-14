import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-resizer-app';
  selectedFile: File

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  onUpload() {
    // upload code goes here
    console.log(this.selectedFile);
  }
}




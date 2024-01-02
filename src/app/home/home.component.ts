import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showPopup: boolean = false;
  newActivityName: string = "";

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  } 
  addActivity() {
    console.log("New Activity Name:", this.newActivityName);
    this.closePopup();
  }

  editPost() {
  }
  deletePost() {
  }
}

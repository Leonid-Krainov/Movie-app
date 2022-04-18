import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  visible = localStorage.getItem("visible") || "display";
  hidden = localStorage.getItem("hidden") || "none-display";
  dark = localStorage.getItem("dark");
  changeView() {
    if (this.visible == "display") {
      this.visible = "none-display"
      this.hidden = "display"
    } else {
      this.visible = "display"
      this.hidden = "none-display"
    }
    localStorage.setItem('visible', this.visible);
    localStorage.setItem('hidden', this.hidden);
  }
  changeTheme() {
    this.dark = (this.dark == "") ? "dark-theme" : "";
    localStorage.setItem('dark', this.dark);
  }
}

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  visible = "display";
  hidden = "none-display";
  dark = "";
  ngOnInit() {
    // this.dark = (!localStorage.getItem(this.dark)) ? localStorage.getItem(this.dark) : "";
  }
  changeView() {
    if (this.visible == "display") {
      this.visible = "none-display"
      this.hidden = "display"
    } else {
      this.visible = "display"
      this.hidden = "none-display"
    }
  }
  changeTheme() {
    this.dark = (this.dark == "") ? "dark-theme" : "";
    // localStorage.setItem(dark, this.dark);
  }
}

import {OnInit, Component} from '@angular/core';
import {movielist} from '../assets/movielist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  visible = localStorage.getItem('visible') || 'display';
  dark = localStorage.getItem('dark');

  ngOnInit() {
    localStorage.setItem('filmData', JSON.stringify(movielist.films));
  }

  changeView() {
    this.visible === 'display' ? this.visible = '' : this.visible = 'display'
    localStorage.setItem('visible', this.visible);
  }

  changeTheme() {
    this.dark = (this.dark == '') ? 'dark-theme' : '';
    localStorage.setItem('dark', this.dark);
  }
}

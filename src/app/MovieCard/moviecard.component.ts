import {Component} from '@angular/core';
import {movielist} from "../../assets/movielist";

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['/moviecard.component.scss']
})

export class MoviecardComponent {
  films = movielist.films;
}


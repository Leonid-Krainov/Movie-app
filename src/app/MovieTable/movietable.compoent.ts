import {Component} from '@angular/core';
import {movielist} from "../../assets/movielist";

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.scss']
})

export class MovietableComponent {
  films = movielist.films;
}


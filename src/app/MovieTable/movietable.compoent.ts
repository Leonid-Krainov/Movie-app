import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.scss']
})

export class MovietableComponent implements OnInit {
  films = JSON.parse(<string>localStorage.getItem('filmData'));

  ngOnInit() {
  }
}


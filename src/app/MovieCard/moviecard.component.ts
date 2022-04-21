import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['/moviecard.component.scss']
})

export class MoviecardComponent implements OnInit {
  films = JSON.parse(<string>localStorage.getItem('filmData'));

  ngOnInit() {
  }
}

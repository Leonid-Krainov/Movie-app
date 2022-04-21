import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: '/form.component.html',
  styleUrls: ['/form.component.scss']
})

export class FormComponent implements OnInit {
  myForm: FormGroup | undefined;

  ngOnInit() {
    this.myForm = new FormGroup({
      findFilm: new FormControl()
    })
  }
}
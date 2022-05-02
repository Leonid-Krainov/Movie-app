import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    release_date: new FormControl('', Validators.required),
    vote_count: new FormControl('', Validators.required),
    poster_path: new FormControl('', Validators.required),
  });

  imgConvertor(event: any) {
    // var file = this.addForm.value.poster_path;
    // var reader = new FileReader();
    // reader.onloadend = function() {
    //   console.log('RESULT', reader.result)
    // }
    // reader.readAsDataURL(file);
    console.log(this.addForm.value.poster_path)
  }

  addFilm(this: any) {

    console.log(this.addForm.value)
  }

  selectors = [
    {id: 1, name: "Name"},
    {id: 2, name: "Release date"},
    {id: 3, name: "Votes"},
  ]

  ngOnInit() {
  }
}

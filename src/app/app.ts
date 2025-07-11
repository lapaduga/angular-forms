import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NoReactValidator } from './no-react.validator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, JsonPipe, NoReactValidator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  person = {
    name: '',
    lastName: '',
    address: {
      street: '',
      building: 0
    }
  }

  onChange(value: string) {
    console.log(value);
    this.person.name = value;
  }

  onSubmit(form: NgForm) {
  }
}

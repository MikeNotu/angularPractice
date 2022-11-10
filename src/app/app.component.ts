import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Attendant } from './Attendant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'angularPractice';
  attendants: Attendant[] = [];
  newAttendant: Attendant = {
    name: '',
    arrivedAt: '',
  };

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Formulario inválido');
      return;
    }
    this.attendants.push(this.newAttendant);
    this.resetForm();
  }

  resetForm() {
    this.newAttendant = {
      name: '',
      arrivedAt: '',
    };
  }
}

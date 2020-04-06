import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { UserModel } from '../user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), this.passwordValidator(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')).bind(this)]),
    age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
  })

  userId: string;

  @Input() user: Observable<UserModel>

  @Output() handleUser: EventEmitter<UserModel> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.user?.subscribe(userData => {
      this.userId = userData.id;
      this.userForm.setValue({
        firstName: userData.firstName,
        lastName: userData.lastName,
        login: userData.login,
        password: userData.password,
        age: userData.age
      })
    });
  }

  handleFormSubmit(): void {
    console.log(this.userForm.value);
    this.handleUser.emit({...this.userForm.value, id: this.userId});
    this.userForm.reset();
  }

  passwordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const testMatch = nameRe.test(control.value);
      return testMatch ? null : { 'requireOneCharOneNumber': { value: control.value } };
    };
  }

}

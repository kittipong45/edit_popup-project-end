import { Component } from '@angular/core';
import { ApiUser } from '../API/api-user';
import { Router } from '@angular/router';

class Register {
  code_student: string = "";
  password: string = "";
  confirm_password: string = "";
  first_name: string = "";
  last_name: string = "";
  nick_name: string = "";
  faculty: string = "";
  major: string = "";
  phone: string = "";
  religion: string = "";
  blood_group: string = "";
  food_allergy : string = "";
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  form: Register = new Register();
  selectedReligion: any;
  customReligion: any;
  error_code_student: boolean = false;

  check_error ={
    code_student: false,
    password: false,
    confirm_password: false,
    first_name: false,
    last_name: false,
    nick_name: false,
    faculty: false,
    major: false,
    phone: false,
    religion: false,
    blood_group: false,
    food_allergy : false,
  }
  checkStudentCodeLength(): boolean {
    return this.form.code_student.toString().length === 8;

  }

  submit() {
    if (this.form.religion == "อื่นๆ") {
      this.form.religion = this.customReligion;
    }
    
    // console.log(this.form);

    if (!this.checkStudentCodeLength()) {
      this.error_code_student = true;
    } else {
      this.error_code_student = false;

      this.Api.registerUser(this.form).subscribe(
        (response) => {
          // Next callback
          console.log('response received');
          console.log(response);
          this.router.navigate(['/login']);
        },
        (error) => {
          // Error callback
          console.error('error caught in component');
        }
      );
    }
  }

  constructor(private router :Router , private Api: ApiUser) {}
}

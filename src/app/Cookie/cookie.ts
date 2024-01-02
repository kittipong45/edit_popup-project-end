import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
    providedIn:"root"
})

export class Cookie {
  constructor(private cookieService: CookieService) {

  }

  remember_password(code_student : string , password : string){
    this.cookieService.set('code_student',code_student)
    this.cookieService.set('password',password)
    // console.log("string")
    // console.log(password)
  }

  get_code_student(){
    return{
        code_student : this.cookieService.get("code_student"),
        password : this.cookieService.get("password")
    }
  }

}
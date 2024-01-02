import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn : 'root'
})
export class ApiUser{
    constructor(public http: HttpClient){

    }
    private localhost = "https://8735-58-10-66-5.ngrok-free.app"
    getLocalhost(){
        return this.localhost
    }
    loginUser(form:any){
        return this.http.post(this.localhost+"/student/login",form)
    }
    registerUser(form:any){
        return this.http.post(this.localhost+"/student/register",form)
    }
    
}
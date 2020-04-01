import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'                                                                    
})
export class UsersService {  

  _BASE_URL: string = 'http://localhost:8080/';
  _USERS_BASE_URL: string = `${this._BASE_URL}+users/`;

  constructor(private http: HttpClient){}

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this._USERS_BASE_URL);
  }

  changeStatus(userData: UserModel): Observable<UserModel>{
    return this.http.put<UserModel>(this._USERS_BASE_URL+userData.id,{
      isDeleted: !userData.isDeleted
    });
  }

  getUser(userId: string): Observable<UserModel>{
    return this.http.get<UserModel>(this._USERS_BASE_URL+userId);
  }

  getActiveUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this._USERS_BASE_URL).pipe(
      map(userList => userList.filter(user => !user.isDeleted))
    );
  }

  getInActiveUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this._USERS_BASE_URL).pipe(
      map(userList => userList.filter(user => user.isDeleted))
    );
  }

}

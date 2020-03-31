import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserStructure } from './user-structure.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'                                                                    
})
export class UsersService {  

  constructor(private http: HttpClient){}

  getUsers(): Observable<UserStructure[]>{
    return this.http.get<UserStructure[]>('http://localhost:8080/users');
  }

  changeStatus(userData: UserStructure){
    return this.http.put('http://localhost:8080/users/'+userData.id,{
      isDeleted: !userData.isDeleted
    });
  }

  getUser(userId: string){
    return this.http.get('http://localhost:8080/users/'+userId);
  }

  getActiveUsers(){
    return this.http.get<UserStructure[]>('http://localhost:8080/users').pipe(
      map(userList => userList.filter(user => !user.isDeleted))
    );
  }

  getInActiveUsers(){
    return this.http.get<UserStructure[]>('http://localhost:8080/users').pipe(
      map(userList => userList.filter(user => user.isDeleted))
    );
  }

}

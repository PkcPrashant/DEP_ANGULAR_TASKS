import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry, catchError, filter } from 'rxjs/operators';
import { usersMock } from './users.mock';
import { UserStructure } from './user-structure.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {  

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get<any[]>('http://localhost:8080/users');
  }

  changeStatus(userId: string): void{
    // let index = this.users.findIndex(user => user.id === userId);
    // this.users[index].isDeleted = !this.users[index].isDeleted ;
  }

  getUser(userId: string){
    return this.http.get('http://localhost:8080/users/'+userId);
  }

  getActiveUsers(){
    return this.http.get<any[]>('http://localhost:8080/users').pipe(
      map(userList => userList.filter(user => !user.isDeleted))
    );
  }

  getInActiveUsers(){
    return this.http.get<any[]>('http://localhost:8080/users').pipe(
      map(userList => userList.filter(user => user.isDeleted))
    );
  }

}

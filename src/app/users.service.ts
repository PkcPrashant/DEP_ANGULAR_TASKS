import { Injectable } from '@angular/core';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {  

  private users: User[] = [
    {
      id: '1',
      firstName: 'user',
      lastName: '1',
      age: 30,
      login: 'user1',
      password: 'pass1',
      isDeleted: false
    },
    {
      id: '2',
      firstName: 'user',
      lastName: '2',
      age: 30,
      login: 'user2',
      password: 'pass2',
      isDeleted: true
    },
    {
      id: '3',
      firstName: 'user',
      lastName: '3',
      age: 30,
      login: 'user3',
      password: 'pass3',
      isDeleted: false
    },
    {
      id: '4',
      firstName: 'user',
      lastName: '4',
      age: 30,
      login: 'user4',
      password: 'pass4',
      isDeleted: false
    },
    {
      id: '5',
      firstName: 'user',
      lastName: '5',
      age: 30,
      login: 'user5',
      password: 'pass5',
      isDeleted: true
    },
  ];

  getUsers(){
    return this.users;
  }

  changeStatus(username: string){
    this.users.forEach(user => {
      if(user['id'] === username){
        user['isDeleted'] = !user['isDeleted'];
      }  
    })
  }

  getActiveUsers(){
    return this.users.filter(user => !user.isDeleted)
  }

  getInActiveUsers(){
    return this.users.filter(user => user.isDeleted)
  }

}

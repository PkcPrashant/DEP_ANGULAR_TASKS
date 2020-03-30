import { Injectable } from '@angular/core';
import { usersMock } from './users.mock';
import { UserStructure } from './user-structure.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {  

  users: UserStructure[] = usersMock;

  getUsers(): UserStructure[]{
    return this.users;
  }

  changeStatus(userId: string): void{
    let index = this.users.findIndex(user => user.id === userId);
    this.users[index].isDeleted = !this.users[index].isDeleted ;
  }

  getUser(userId: string): UserStructure{
    return this.users.find((u) => u.id === userId)
  }

  getActiveUsers(): UserStructure[]{
    return this.users.filter(user => !user.isDeleted)
  }

  getInActiveUsers(): UserStructure[]{
    return this.users.filter(user => user.isDeleted)
  }

}

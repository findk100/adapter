import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllData() {
   const data = from([1,2,3,4,5])
   return data;
  }

  getAllUsers() {
    return this.httpClient.get<Array<UserModel>>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}

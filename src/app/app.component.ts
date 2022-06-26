import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { finalize, take } from 'rxjs/operators';
import { UserModel } from './model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  userData!: Array<UserModel>;

  ngOnInit() {
    this.userService
      .getAllData()
      .pipe(finalize(() => this.getAllUsers()))
      .subscribe((res) => {
        console.log(res);
      });
  }

  getAllUsers() {
    this.userService
      .getAllUsers()
      .pipe(take(1))
      .subscribe((userData: Array<UserModel>) => {
        this.userData = userData;
        console.log(userData);
      });
  }
}

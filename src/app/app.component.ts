import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usuariosWeb';

  constructor(private userService: UserService){

  }
  newRestriction(event:any){
    console.log(event)
    this.userService.addUser(event);
  }
}

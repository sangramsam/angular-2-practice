import {Component} from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: 'app/component/user.component.html',
})
export class UserComponent {
  name: string;
  email: string;
  mobile: number;
  hobbies: string[];
  showHobbie: boolean;
  address: address;

  constructor() {
    this.name = "Sangram singh";
    this.email = "singh.sangram56@gmail.com";
    this.mobile = 9570662121;
    this.showHobbie = false;
    this.hobbies = ["movie", "walk", "sport", "game"];
    this.address = {
      street: 'sector 7',
      city: 'banglore',
      state: 'karnataka'
    }
  }

  showHobbies() {
    if (this.showHobbie == true) {
      this.showHobbie = false;
    } else {
      this.showHobbie = true;
    }
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  adduser(){
    console.log(this);
  }
}
interface address {
  street: string;
  city: string;
  state: string;
}

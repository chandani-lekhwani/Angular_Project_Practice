import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avtar.jpg';
  userName: string = 'Chandani Lekhwani';
  userPost: string = 'Software Developer';
  
  constructor() { }

  ngOnInit() {
  }

}

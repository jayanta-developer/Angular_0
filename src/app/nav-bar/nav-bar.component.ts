import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  myEmail = '';
  emailBtnText = 'Show the email id';

  @Input() title: any;
  @Input() email: any;

  constructor() {}

  showEmail(email: any) {
    if (!this.myEmail) {
      this.myEmail = email;
      this.emailBtnText = 'Hided the email id';
    } else {
      this.myEmail = '';
      this.emailBtnText = 'Show the email id';
    }
  }
  ngOnInit(): void {}
}

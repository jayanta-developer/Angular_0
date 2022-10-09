import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular project';
  email = '';

  data = [
    {
      name: 'sovon dey',
      email: 'jayantadey398@gma.com',
      address: 'Bhandartikuri, Bhardhaman, West bengal',
    },
    {
      name: 'jayanta dey',
      email: 'Payantadey398@gma.com',
      address: 'Bhandartikuri, Bhardhaman, West bengal',
    },
    {
      name: 'roky dey',
      email: 'Sayantadey398@gma.com',
      address: 'Berwerwehandartikuri, Bhardhaerwrman,eWest benwrwegal',
    },
    {
      name: 'Pvdsfhweon dey',
      email: 'rewejayansdrwertadey398@gma.com',
      address: 'Bhandarrtikuwerri, rweBhardhwerewmanwe, rrWeewrt ewr',
    },
  ];

  getDatatoParents(data: any){  
    this.email = data 
  }

  ngOnInit() {}
}

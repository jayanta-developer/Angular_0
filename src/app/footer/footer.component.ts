import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  email = 'jayantadey398@gmail.com';

  @Output() getDatatoParents: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.getDatatoParents.emit(this.email);
  }
}

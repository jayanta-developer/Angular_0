import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  number= '';
  file = null;
  val='';
  constructor() {}




  getFile(value: any) { 
    this.file = value.target.files[0]      
    const fileSize = value.target.files[0].size;
    if(fileSize < 5000){
      console.log('file size is too short')      
    } else{
      console.log('file uploaded')
    }
    
  }

  usePipes(value: any){ 
    this.val = value.target.value
  }




  uploadFile(){}

  ngOnInit(): void {}
}

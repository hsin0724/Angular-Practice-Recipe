import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() switchList = new EventEmitter<string>();
  listType = "";

  constructor() { }

  ngOnInit(): void {
  }


  // onSelect(text : string){
  //   this.switchList.emit(text);
  // }

}

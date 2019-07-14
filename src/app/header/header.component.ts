import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {ChangeDropOnePage} from '../reducers/actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./rwd/max-360.scss','./rwd/min-360.scss']
})
export class HeaderComponent implements OnInit {
  dropOne
  constructor(private store: Store<{Statedrop: any}>) {
  this.store.select('Statedrop','DropOnePage').subscribe(
    (data)=>{
      this.dropOne = data;
      console.log(this.dropOne);
    }
    )
  }
  changeState($event)
  {
    this.store.dispatch(ChangeDropOnePage());
    this.store.select('Statedrop','DropOnePage').subscribe(
      (data)=>{
        console.log(data);
      })
      event.stopPropagation();
  }
  ngOnInit() {
  }
  
  

}

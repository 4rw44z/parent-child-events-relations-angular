import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-parent',
  templateUrl: './color-parent.component.html',
  styleUrls: ['./color-parent.component.css']
})
export class ColorParentComponent implements OnInit {
  public color: ''
  public selectedItem = null;
  public testArray = [
    {
      id: 1,
      color: '#FFF'
    },
    {
      id: 2,
      color: '#B6B6B6'
    },
    {
      id: 3,
      color: ''
    },
    {
      id: 4,
      color: ''
    }
  ];
  constructor() { }
  ngOnInit() {
  }
  buttonClicked(data) {
    this.selectedItem = data;
  }
  handleColorChanged($event) {
    this.updateColor(this.selectedItem, 'color', $event);
  }
  updateColor(object, property, value) {
    this.testArray = this.testArray.map(
      (e) => {
        if(e.id !== object.id){
          return e
        } 
        const updated = {
          ...e,
          [property]: value
        };
        return updated;
      }
    )
  }
}
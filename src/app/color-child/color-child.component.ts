import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-color-child',
  templateUrl: './color-child.component.html',
  styleUrls: ['./color-child.component.css']
})
export class ColorChildComponent implements OnInit, OnChanges {
  @Input() public someColor = 'test';
  public selectedColor = 'jade';
  @Output() public colorChanged: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.someColor) {
      this.someColor = changes.someColor.currentValue || 'transparent'
      console.log(changes.someColor.currentValue);
    }
  }

  handleChangeColor() {
    this.selectedColor = this.someColor;
    this.colorChanged.emit(this.selectedColor);
  }
}
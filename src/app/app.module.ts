import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ColorParentComponent } from './color-parent/color-parent.component';
import { ColorChildComponent } from './color-child/color-child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ColorParentComponent, ColorChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { SliderTopoComponent } from './slider-topo/slider-topo.component';
import { SliderEditorasComponent } from './slider-editoras/slider-editoras.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    SliderTopoComponent,
    SliderEditorasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

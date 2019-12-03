import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PIXIComponent } from './pixi/pixi.component';
import { SampleListComponent } from './samples/sample-list/sample-list.component';
import { ShapesSampleComponent } from './samples/shapes-sample/shapes-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    PIXIComponent,
    SampleListComponent,
    ShapesSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

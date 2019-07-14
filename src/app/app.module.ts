import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstPageConfigComponent } from './first-page-config/first-page-config.component';
import { StoreModule } from '@ngrx/store';
import {MatButtonModule} from '@angular/material/button';
import * as dropReducer from './reducers/reducers';
import { SecondPageConfigComponent } from './second-page-config/second-page-config.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstPageConfigComponent,
    SecondPageConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({Statedrop: dropReducer.reducer}),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

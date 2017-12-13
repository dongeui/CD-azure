import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlobModule } from 'angular-azure-blob-service';
import { AppComponent } from './app.component';

import { BrowserXhr } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlobModule.forRoot()
  ],
  exports: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

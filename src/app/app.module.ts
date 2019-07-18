import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriggerComponent } from './trigger/trigger.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TriggerComponent,
    ShowDataComponent,
    HeaderComponent,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateContratoComponent } from './components/create-contrato/create-contrato.component';
import { ListContratosComponent } from './components/list-contratos/list-contratos.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateContratoComponent,
    ListContratosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

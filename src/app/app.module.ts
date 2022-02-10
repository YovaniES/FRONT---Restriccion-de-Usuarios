import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuarios/usuario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestrictionService } from './services/restriction.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    UsuarioModule,
    BrowserAnimationsModule,
  ],
  providers: [RestrictionService],
  bootstrap: [AppComponent],
})
export class AppModule {}

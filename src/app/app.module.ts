import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { CuboService } from './services/cubo.service';

import { MarcacuboComponent } from './components/marcacubo/marcacubo.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DetallesComponent } from './components/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
  
    MarcacuboComponent,
       LoginComponent,
       PerfilesComponent,
       RegistroComponent,
       DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, routing
  ],
  providers: [appRoutingProviders , CuboService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { MarcacuboComponent } from "./components/marcacubo/marcacubo.component";
import { LoginComponent } from "./components/login/login.component";
import { PerfilesComponent } from "./components/perfiles/perfiles.component";
import { RegistroComponent } from "./components/registro/registro.component";

const appRoutes: Routes=[
    {path: "", component: HomeComponent},
    {path: "cubo", component: HomeComponent},
    {path: "marcacubo/:marca/:idcubo", component: MarcacuboComponent},
    {path: "login", component: LoginComponent},
    {path: "perfil", component: PerfilesComponent},
    {path: "registro", component: RegistroComponent},
    
]
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
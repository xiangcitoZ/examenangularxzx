import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment.prod";

@Injectable()
export class CuboService{
    constructor(private _http: HttpClient){}
    
    
    login(log: Object): Observable<any> {
        var json = JSON.stringify(log);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "/api/Manage/Login";
        var url = environment.urlApiCubo + request;

        return this._http.post(url,json, {headers:header});
    }

    loadPerfil(): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("autho"));
        var request = "/api/Manage/PerfilUsuario";
        var url = environment.urlApiCubo + request;

        return this._http.get(url, {headers:header});
    }

    registroUsuario(log: Object): Observable<any> {
        var json = JSON.stringify(log);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "/api/Manage/RegistroUsuario";
        var url = environment.urlApiCubo + request;

        return this._http.post(url,json, {headers:header});
    }

    getCubo(): Observable<any>{
        var request = "/api/Cubos"
        var url = environment.urlApiCubo + request;
        return this._http.get(url);

    }

    getCuboMarca(marca : string): Observable<any>{
        var request = "/api/Cubos/CubosMarca/"+marca
        var url = environment.urlApiCubo + request;
        return this._http.get(url);

    }

    getCuboComentarios(id : number): Observable<any>{
        var request = "/api/ComentariosCubo/GetComentariosCubo/"+id
        var url = environment.urlApiCubo + request;
        return this._http.get(url);

    }
}
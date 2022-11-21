import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaemail") cajaEmail!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  @ViewChild("cajarepetir") cajaRepetir!: ElementRef;

  constructor(private _service: CuboService, private _router: Router) { }

  ngOnInit(): void {
  }

  registroUsuario() {
    var nombre = this.cajaNombre.nativeElement.value;
    var email = this.cajaEmail.nativeElement.value;
    var password = this.cajaPassword.nativeElement.value;
    var repetir = this.cajaRepetir.nativeElement.value;

    var login = {
      nombre: nombre,
      email: email,
      password: password,
      repetir: repetir
    }

    this._service.registroUsuario(login).subscribe(response => {
      var tokken = response.response;
      localStorage.setItem("autho", tokken);
      this._router.navigate(["/perfil"]);
    })

  }

}

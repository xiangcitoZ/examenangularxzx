import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CuboService } from 'src/app/services/cubo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("cajamail") cajaMail!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(private _service: CuboService, private _router: Router) { }

  ngOnInit(): void {
  }

  log() {
    var user = this.cajaMail.nativeElement.value;
    var password = this.cajaPassword.nativeElement.value;

    var login = {
      userName: user,
      password: password,
    }

    this._service.login(login).subscribe(response => {
      var tokken = response.response;
      localStorage.setItem("autho", tokken);
      this._router.navigate(["/perfil"]);
    })

  }

}

import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent {
  public usuario!: Usuario;

  constructor(private _service: CuboService) { }

  ngOnInit(): void {
    this._service.loadPerfil().subscribe(response => {
      this.usuario = response;
      console.log(response);
    });
  }
}

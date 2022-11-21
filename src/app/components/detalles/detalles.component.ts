import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';
import { Comentarios } from 'src/app/models/comentarios';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  public cubo!: any;
  public idCubo!: number;
  public id!: number;
  public comentarios!: Array<Comentarios>;

  constructor(private _service: CuboService,
    private _activateRoute: ActivatedRoute) { }

    ngOnInit(): void {

      //PARA EL CUBO
      this._activateRoute.params.subscribe((parametros: Params) => {
        if(parametros['idcubo'] != null){
          this.idCubo = parametros['idcubo'];
        }
    
        this._service.getDetallesCubo(this.idCubo).subscribe(response => {
          this.cubo = response;
        })
      });


      //PARA LOS COMENTARIOS
      this._activateRoute.params.subscribe((parametros: Params) => {
        if(parametros['idcubo'] != null){
          this.id = parametros['idcubo'];
        }
        
        this._service.getCuboComentarios(this.id).subscribe(response => {
          this.comentarios = response;
        })
      });
}
}

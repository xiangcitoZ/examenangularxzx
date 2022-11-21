import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-marcacubo',
  templateUrl: './marcacubo.component.html',
  styleUrls: ['./marcacubo.component.css']
})
export class MarcacuboComponent {
  public cubos!: Array<Cubo>;
  public marca!: string;
  
  constructor(private _service: CuboService,
    private _activateRoute: ActivatedRoute) { }

    ngOnInit(): void {

      //PARA LA MARCA
      this._activateRoute.params.subscribe((parametros: Params) => {
        if(parametros['marca'] != null){
          this.marca = parametros['marca'];
        }
      
        this._service.getCuboMarca(this.marca).subscribe(response => {
          this.cubos = response;
        })
      });


      
    }
}

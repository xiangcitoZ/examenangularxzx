import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CuboService } from 'src/app/services/cubo.service';
import { Cubo } from 'src/app/models/cubo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cubos!: Array<Cubo>;
  constructor(
    private _service: CuboService,
    private _activeRoutes: ActivatedRoute
    )

   { }

   ngOnInit(): void {
      this.loadCubos();
  }

  loadCubos() : void{
    this._service.getCubo().subscribe(response =>{
      this.cubos = response;

    });
  }

}

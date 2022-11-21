import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public cubos!: Array<Cubo>;

  constructor(
    private _service: CuboService,
    private _activeRoutes: ActivatedRoute
  ) { }
  
  loadCubo() : void{
    this._service.getCubo().subscribe(response =>{
      this.cubos = response;

    });
  }

  ngOnInit(): void {
    this.loadCubo();
  }

}

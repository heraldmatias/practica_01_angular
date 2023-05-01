import { Component } from '@angular/core';
import { Planta } from '../../interfaces/plantas.interface';
import { PlantasService } from '../../services/plantas.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  public plantas: Planta[] = [];
  public plantas_interior_count: number = 0;
  public plantas_exterior_count: number = 0;

  constructor(private plantasService: PlantasService) {}
  ngOnInit(): void {
    this.plantasService
      .getPlantas()
      .subscribe((plantas) => this.set_plantas(plantas));
  }

  set_plantas(plantas: Planta[]): void {
    this.plantas = plantas;
    this.plantas_exterior_count = plantas.reduce((counter, obj) => {
      if (obj.tipo === 'Exterior') counter += 1
      return counter;
    }, 0);
    this.plantas_interior_count = plantas.reduce((counter, obj) => {
      if (obj.tipo === 'Interior') counter += 1
      return counter;
    }, 0);
  }
}

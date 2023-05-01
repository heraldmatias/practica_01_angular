import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PlantasRoutingModule } from './plantas-routing.module';



@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    PlantasRoutingModule
  ]
})
export class PlantasModule { }

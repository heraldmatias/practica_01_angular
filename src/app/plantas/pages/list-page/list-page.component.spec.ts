import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import { PlantasService } from '../../services/plantas.service';
import { Observable, of } from 'rxjs';
import { Planta } from '../../interfaces/plantas.interface';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  let mockPlantasService: jasmine.SpyObj<PlantasService>;

  beforeEach(async () => {
    mockPlantasService = jasmine.createSpyObj('PlantasService', ['getPlantas']);
    const testData: Planta[] = [
      {
        "id": 1,
        "nombre_comun": "Lengua de vaca",
        "nombre_cientifico": "Sansevieria Trifasciata",
        "tipo": "Interior",
        "altura_maxima": 140,
        "clima": "Templado, cálido",
        "sustrato_siembra": "Tierra orgánica con buen drenaje, arena, cascarilla de arroz"
    },
    {
        "id": 2,
        "nombre_comun": "Chachafruto",
        "nombre_cientifico": "Schefflera actinophylla",
        "tipo": "Exterior",
        "altura_maxima": 1000,
        "clima": "Todos",
        "sustrato_siembra": "Sustrato para huerto"
    },
    {
        "id": 3,
        "nombre_comun": "Espatifilo",
        "nombre_cientifico": "Spathiphyllum Wallasii",
        "tipo": "Interior",
        "altura_maxima": 65,
        "clima": "Templado, cálido",
        "sustrato_siembra": "Tierra orgánica"
    },
    ]
    mockPlantasService.getPlantas.and.returnValue( of(testData));

    await TestBed.configureTestingModule({
      declarations: [ ListPageComponent ],
      providers: [{ provide: PlantasService, useValue: mockPlantasService }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

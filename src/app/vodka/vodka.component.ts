import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TequilaService } from '../services/tequila.service';
import { VodkaService } from '../services/vodka.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [HttpClientModule],
  providers: [VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent {
  cocteles: any[] = [];

  constructor(private tequilaServicio: VodkaService) {}

  ngOnInit() :void{
    this.tequilaServicio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}

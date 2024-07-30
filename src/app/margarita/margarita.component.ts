import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MargaritaService } from '../services/margarita.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MargaritaService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent {
  cocteles: any[] = [];

  constructor(private margaritaServicio: MargaritaService) {}

  ngOnInit() :void{
    this.margaritaServicio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}

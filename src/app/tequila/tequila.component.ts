import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TequilaService } from '../services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule],
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css',
})
export class TequilaComponent {
  cocteles: any[] = [];

  constructor(private tequilaServicio: TequilaService) {}

  ngOnInit() :void{
    this.tequilaServicio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}


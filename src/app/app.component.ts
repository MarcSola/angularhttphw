import { Component, OnInit }  from '@angular/core';
import { CategoriaService }   from './services/categoria.service';
import { CamareroService }    from './services/camarero.service';
import { Camarero }           from 'src/model/camarero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  categorias: String[] = undefined;
  camarero: Camarero = undefined;

  constructor(private categoriaService: CategoriaService, private camareroService: CamareroService){}

  ngOnInit(): void {
   
    this.categoriaService.getCategorias().subscribe(datos =>{
      this.categorias = datos;
    });

    this.camareroService.getCamarero(100).subscribe(datos =>{
      this.camarero = datos;
    })

  }

}

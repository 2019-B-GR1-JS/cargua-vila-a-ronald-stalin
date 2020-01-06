import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fecha = new Date();
  sueldo = 12.001;
  universidad = 'Escuela Politecnica Nacional';

  title = 'componentes';
  arregloObjetos = [
    {
      id: 1, // number
      "nombre": "Ronald", // string
      apellido: 'Cargua', // string
      sueldo: 12.12, // number
      casado: false, // boolean
      comida: "https://www.ecuavisa.com/sites/default/files/fotos/2019/01/03/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg",
      carro: null,
      ojos: undefined,
    },
    {
      id: 2, // number
      "nombre": "Juan", // string
      apellido: 'PEREZ', // string
      sueldo: 22.99, // number
      casado: true, // boolean
      comida: "https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg", //
      carro: null,
      ojos: undefined,
    },
    {
      id: 3, // number
      "nombre": "Eduardo", // string
      apellido: 'Vivalcio', // string
      sueldo: 74.01, // number
      casado: false, // boolean
      comida: "https://images.clarin.com/2019/08/30/de-la-invencion-de-la___hLWb7dc-8_1256x620__1.jpg", //
      carro: null,
      ojos: undefined,
    }
  ];

  imprimirSueldo(sueldo: string) {
    console.log(sueldo);
  }
}
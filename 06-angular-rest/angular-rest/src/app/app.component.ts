import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  constructor(
    private readonly _httpClient: HttpClient
  ){

  }
  ngOnInit(): void {
    const urlUsuarios = this.url + '/usuario';
    const usuarios$ = this._httpClient.get(urlUsuarios);
    usuarios$.subscribe(
      (usuarios: any[])=> {
        console.log('Usuarios: ', usuarios)
      },
      (error)=>{
        console.log({
          error: error,
          mensaje: 'Error consultando usuarios'
        })
      }
    );
    console.log('respuesta')
  }
}

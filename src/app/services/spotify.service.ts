import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista:string='https://api.spotify.com/v1/artists'

  constructor(private http: Http) { }

  getArtistas(termino: string) {
    const query = `?q=${termino}&type=artist`;
    const url = this.urlBusqueda + query;

    return this.http.get(url).map(response => {
      this.artistas = response.json().artists.items;
      console.log(this.artistas)
      return this.artistas;
    });

  }

  getArtista(id: string) {
    const query = `/${id}`;
    const url = this.urlArtista + query;

    return this.http.get(url)
    .map(response => {
      //this.artista = response.json().artists.items;
      console.log(response.json())
      return response.json();
    });

  }



}

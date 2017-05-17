import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlBusqueda: string = 'https://api.spotify.com/v1/search';

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



}

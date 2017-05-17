import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  private urlBusqueda = 'https://api.spotify.com/v1/search';
  private urlArtista = 'https://api.spotify.com/v1/artists';

  constructor(private http: Http) { }

  getArtistas(termino: string) {
    const query = `?q=${termino}&type=artist`;
    const url = this.urlBusqueda + query;

    return this.http.get(url).map(response => {
      this.artistas = response.json().artists.items;
      console.log(this.artistas);
      return this.artistas;
    });

  }

  getArtista(id: string) {
    const query = `/${id}`;
    const url = this.urlArtista + query;

    return this.http.get(url)
    .map(response => {
      console.log(response.json());
      return response.json();
    });

  }



}

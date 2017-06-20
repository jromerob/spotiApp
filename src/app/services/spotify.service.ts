import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  private urlBusqueda = 'https://api.spotify.com/v1/search';
  private urlArtista = 'https://api.spotify.com/v1/artists';
  private headers:Headers=new Headers();
  private apiKey:string="BQAKfQNFzDPNO8Qn2AkCrIQ_nWeVzV_-IjthZViulKhJjTwNiDft7--4V1HvaZem7FlphyVdWzRiDvwib-A2KRJbWdpm_2v7BgiK1dTlzbPwnkqSdMtfxwSzcZnPD_7eE6WRhYCx";


  constructor(private http: Http) {

    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer '  + this.apiKey);
 }

  getArtistas(termino: string) {
    const query = `?q=${termino}&type=artist`;
    const url = this.urlBusqueda + query;
    const headers = this.headers;

    return this.http.get(url , {headers}).map(response => {
      this.artistas = response.json().artists.items;
      console.log(this.artistas);
      return this.artistas;
    });

  }

  getArtista(id: string) {
    const query = `/${id}`;
    const url = this.urlArtista + query;
    const headers = this.headers;
    return this.http.get(url, {headers})
    .map(response => {
      console.log(response.json());
      return response.json();
    });

  }

    getTop(id: string) {
      const query = `/${id}/top-tracks?country=US`;
      const url = this.urlArtista + query;
      const headers = this.headers;

      return this.http.get(url, {headers})
      .map(response => {
        console.log(response.json());
        return response.json();
      });

    }



}

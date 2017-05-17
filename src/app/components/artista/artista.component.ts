import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any;

  constructor(private activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(parametros => parametros['id'])
      .subscribe(id => {
        console.log(id);
        this._spotifyService.getArtista(id)
          .subscribe(response => {
              this.artista = response
            });
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiSpotifyService } from '../../Services/api-spotify.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  ArtSpotify: any = [];
  

  constructor(private _api:ApiSpotifyService,private _route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this._route.params.subscribe(data =>{

      console.log(data['termino']);
      
      //this.mivariable = this._heroeservice.BuscarHeroes(data['termino']);
      
      //console.log(this.mivariable)
    })
    
  }
 

  // buscarArtista(){

  //   this._api.getNewReleases().subscribe(data =>{
  //     console.log(data)
  //     this.ArtSpotify = data.albums.items

  //   })
  // }

  
  //1sacar la informacion del artista de la linea 22
  search(query: string) {
    this._api.search(query).subscribe((data:any) => {
     console.log(data)
     this.ArtSpotify=data
    });
  }

















  //search(query: string) {
   // this._api.search(query).subscribe(results => {
    //  this.searchResults = results;
   // });
   // console.log(this.searchResults+"asdasd")
 // }

}

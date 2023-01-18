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
  temp: string=""

  constructor(private _api:ApiSpotifyService,private _route: ActivatedRoute) {

   }

  ngOnInit(): void {
    

    this._route.params.subscribe(data =>{

      console.log(data['termino']);
      this.temp =data['termino']
    console.log(this.temp)
    
      
    })
    
    this.search(this.temp)
  }
 

 

  
  //1sacar la informacion del artista de la linea 22
  search(query: string) {
    console.log(query)
    this._api.search(query).subscribe((data:any) => {
     console.log(data)
     this.ArtSpotify=data.artists.items
     //console.log(this.ArtSpotify)
    });
  }

















 
}

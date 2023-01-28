import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiSpotifyService } from '../../Services/api-spotify.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  BusquedaSensitiva: any = [];
  ArtSpotify: any = [];
  temp: string=""
  newImageUrl: any = "https://ruizhealytimes.com/wp-content/uploads/2015/07/musica.jpg"
  constructor(private _api:ApiSpotifyService,private _route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.updateImage();
    this._route.params.subscribe(data =>{
    this.temp =data['termino']
    

    
    })
    
    this.search(this.temp)
  }
  updateImage() {
  
   
  }
 

  search(query: string) {
    console.log(query)
    this._api.search(query).subscribe((data:any) => {
     console.log(data)
     this.ArtSpotify=data.artists.items
    });

   
  }

















 
}

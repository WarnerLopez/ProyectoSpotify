import { Component, OnInit } from '@angular/core';
import { ApiSpotifyService } from '../../Services/api-spotify.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {



  constructor(private _api:ApiSpotifyService) {

   }

  ngOnInit(): void {
    this.buscarArtista()
  }

  buscarArtista(){

    this._api.getNewReleases().subscribe(data =>{
      console.log(data)
    })
  }

  Test(){
    console.log("hola")
    
   }




}

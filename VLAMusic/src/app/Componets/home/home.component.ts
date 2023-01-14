import { Component, OnInit } from '@angular/core';
import { ApiSpotifyService } from '../../Services/api-spotify.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ArtSpotify: any = [];
  

  constructor(private _api:ApiSpotifyService) { }

  ngOnInit(): void {
    this.getArtis()

  }

  getArtis(){

    this._api.getNewReleases().subscribe(data =>{
      console.log(data)
      this.ArtSpotify = data.albums.items
    })
  }

  

  

}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ApiSpotifyService {
  url1 = 'https://api.spotify.com/v1/browse/new-releases?limit=30'
  
  
  temp: string=""


  constructor( private _http: HttpClient) { 
  this.search(this.temp)
  
  }

  getNewReleases():Observable<any>{
     
      const headers = new HttpHeaders({
        "Authorization" :"Bearer BQCYiJ5d0nAAYQQTtyz4efbGQreTIx9yD3EnDgReD-7mGSkDpDk9L_-Fhd1_kG8FKED6UfiL1QxUO_HNOFe1eDhaOF8vRqf4OxVFnLBsRqT7gH4l56E"
        
      });
      
   const artis = this._http.get<any>(this.url1, {headers})
    return this._http.get<any>(this.url1, {headers})
    

  }

  search(query: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer BQCYiJ5d0nAAYQQTtyz4efbGQreTIx9yD3EnDgReD-7mGSkDpDk9L_-Fhd1_kG8FKED6UfiL1QxUO_HNOFe1eDhaOF8vRqf4OxVFnLBsRqT7gH4l56E"
      
    });
    
    return this._http.get(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {headers});
  }




 
 
















































  //search(query: string) {
  
  
    //const params = new HttpParams()
    //  .set('q', query)
   //   .set('type', 'track');

    //return this._http.get('	https://api.spotify.com/v1/browse/new-releases', {
     // headers: {
      //  'Authorization': `Bearer ${this.accessToken}`
     // },
     // params: params
     
      
    //});
   
  
  //}
 
  

  
 
  



}



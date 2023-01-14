import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ApiSpotifyService {
  
  accessToken: string = "Bearer BQC4Q1ygh3LqPEmUhBoW-7bc6tKnvb9ZtcAUxNsXZnqrWx2F6vE43y1xTuCjAVg1Z2D3CCtWheI5p3WGqW7aHQyGetCm2QTv62tdCufQPPOcoNGuQAA";
   
  constructor( private _http: HttpClient) { 
  

  }

  getNewReleases():Observable<any>{
     var url = 'https://api.spotify.com/v1/browse/new-releases?limit=30'
     
               

      const headers = new HttpHeaders({
        "Authorization" :"Bearer BQC4Q1ygh3LqPEmUhBoW-7bc6tKnvb9ZtcAUxNsXZnqrWx2F6vE43y1xTuCjAVg1Z2D3CCtWheI5p3WGqW7aHQyGetCm2QTv62tdCufQPPOcoNGuQAA"
        
      });
   const artis = this._http.get<any>(url, {headers})
    return this._http.get<any>(url, {headers})
    

  }

  search(query: string): Observable<any> {
    return this._http.get(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`
      }
    });
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



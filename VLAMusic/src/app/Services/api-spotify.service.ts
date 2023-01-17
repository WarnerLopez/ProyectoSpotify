import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ApiSpotifyService {
  
  accessToken: string = "Bearer BQB7QWM_IN4LBKBdMHSrTfKvfJZxzk403kOrFtx5A8y_JMtdozv-j7APm4XPT7mAC0xEd8YJ2StJZJJSqE6EwQewP68Lgm_9K4Zjvp8RNU1sJlFzBTo";
  temp: string=""
  constructor( private _http: HttpClient) { 
  this.search(this.temp)

  }

  getNewReleases():Observable<any>{
     var url = 'https://api.spotify.com/v1/browse/new-releases?limit=30'
     
               

      const headers = new HttpHeaders({
        "Authorization" :"Bearer BQDS6rOrELIBRe0X8UfxmmZkU3BtQWcAVuZT5cGHqHXWxKjE83AzQg9sVA1AQUIo1Byy4tsQrvThvLNTMuAA2L9CYis9_WYrMbSZiEk28e_MIAY7WdY"
        
      });
   const artis = this._http.get<any>(url, {headers})
    return this._http.get<any>(url, {headers})
    

  }

  search(query: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer BQDS6rOrELIBRe0X8UfxmmZkU3BtQWcAVuZT5cGHqHXWxKjE83AzQg9sVA1AQUIo1Byy4tsQrvThvLNTMuAA2L9CYis9_WYrMbSZiEk28e_MIAY7WdY"
      
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



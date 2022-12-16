import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ApiSpotifyService {
 
  
  constructor( private _http: HttpClient) { 
  

  }

  getNewReleases():Observable<any>{
     var url = 'https://api.spotify.com/v1/browse/new-releases?limit=30'

      const headers = new HttpHeaders({
        "Authorization" :"Bearer BQCdKMti3aBrsTnY8F5YH1EDsiJv20H79qT7Rie1wTEM5ruPMoRGnjoFEC_rlIeqJqRfhlOR7Gs1HhlKs7ym4NYbxM5uFVv1DsmGaunwsZ5IdL1C0i8"
        
      });
    
    return this._http.get<any>(url, {headers})
    
     

  }
  

  
 
  



}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  //initialize api url in environment and get the value from there
  private apiUrl = environment.apiUrl;

  //define mock array with three houses for the list page 
  private houses = [
    { 
      id: 1,
      path: '../../assets/images/houses/bird.png'
    },
    { 
      id: 2,
      path: '../../assets/images/houses/dragon.png'
    },
    { 
      id: 3,
      path: '../../assets/images/houses/fish.png'
    },
  ];

  constructor(private http: HttpClient) {}

  getCharacters(): Promise<any[]> {
    return lastValueFrom(this.http.get<any[]>(this.apiUrl));
  }

  getCharacterDetails(id:any): Promise<any[]> {
    return lastValueFrom(this.http.get<any[]>(this.apiUrl+'/'+id));
  }

  getHouses(): Promise<any[]> {
    return lastValueFrom(of(this.houses));
  }
}

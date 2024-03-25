import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://thronesapi.com/api/v2/Characters';

  private houses =[
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

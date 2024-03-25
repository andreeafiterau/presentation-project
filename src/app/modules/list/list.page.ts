import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Observable, Subject, map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit{

  public houses: any[] = [];
  public characters: any[] = [];
  public ready: boolean = false;
  public showDetails: boolean[] = [];

  constructor(private router: Router, private characterService: CharacterService) {}

  ngOnInit() {
    this.loadData();
  }

  goToDetail(character: any) {
    this.router.navigate(['/detail', character.id]);
  }

  loadData() {
    //get character, and for each character choose randomly a house item from the houses array in character.service,
    //in order to display the icon at the start of the list item
    let promises = [];

    promises.push(this.characterService.getCharacters());
    promises.push(this.characterService.getHouses());

    //process data only after both of the requests have been fetched
    Promise.all(promises)
    .then(data=>{
      data[0].forEach(d=>{
        let new_character = {
          ...d,
          house: this.getRandomHouse(data[1])
        };
        this.characters.push(new_character);
      });
      this.showDetails = Array(this.characters.length).fill(false);
      this.ready = true;
    })
    .catch(err=>{
      console.log(err);
    });
  }

  returnRadomNumber(){
    return Math.floor(Math.random() * 3) + 1;
  }

  getRandomHouse(houses:any){
    const random_number = this.returnRadomNumber();
    return houses.find((h:any)=>h.id ===  random_number);
  }
}

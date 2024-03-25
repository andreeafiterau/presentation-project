import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit{
  public itemId: string|null = '';
  public item:any = null;
  public ready:boolean = false;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    this.itemId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.characterService.getCharacterDetails(this.itemId)
    .then((data:any)=>{
      this.item = data;
      this.ready = true;
    })
    .catch((err:any)=>{
      console.log(err);
    });
  }
}

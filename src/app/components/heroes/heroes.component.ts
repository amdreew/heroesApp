import { Component, OnInit } from '@angular/core';
import { HeroesServiceService, Heroe } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  dataSourse: Heroe[] = [];
  constructor(private serviHeroe: HeroesServiceService) { }

  ngOnInit() {
    this.dataSourse = this.serviHeroe.getHeroes();
    console.log(this.dataSourse);
  }

}

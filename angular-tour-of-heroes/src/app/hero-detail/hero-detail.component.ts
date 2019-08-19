import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
 
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getHero();
  }
 
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
 
  goBack(): void {
    this.location.back();
  }


  save(): void {
     this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack());
   }


   add(name: string): void {
     name = name.trim();
     if (!name) { return; }
     this.heroService.addHero({ name } as Hero)
       .subscribe(hero => {
         this.heroes.push(hero);
       });
   }

   delete(hero: Hero): void {
     //Although the component delegates hero deletion to the HeroService, it remains responsible for updating its own list of heroes.
     this.heroes = this.heroes.filter(h => h !== hero);
     this.heroService.deleteHero(hero).subscribe();
   }




}

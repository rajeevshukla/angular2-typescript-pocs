import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

//import { Hero }                from './hero';
import { WelcomeService }         from './welcome.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './welcome.component.html',
  styleUrls: [ './welcome.component.css' ]
})
export class WelcomeComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private welcomeService: WelcomeService,
    private router: Router) { }

  getHeroes(): void {
    this.welcomeService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.welcomeService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.welcomeService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

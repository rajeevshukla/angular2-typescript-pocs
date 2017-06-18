import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//import { Hero } from './hero';  a model object that can used to do populate json object

@Injectable()
export class WelcomeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/welcome';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): /*Promise<Hero[]>*/ void {
  /*  return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);*/
  }


  getHero(id: number): void {
    const url = `${this.heroesUrl}/${id}`;
    /*return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);*/
  }

  delete(id: number): /*Promise<void>*/ void {
    const url = `${this.heroesUrl}/${id}`;
   /* return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);*/
  }

  create(name: string):/* Promise<Hero> */ void{
   /* return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);*/
  }

  update(/*hero: Hero*/): /*Promise<Hero> */ void {
    const url = `${this.heroesUrl}/${1/*hero.id*/}`;
    /*return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);*/
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


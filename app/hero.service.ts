import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";


@Injectable()
export class HeroService {

    public getHeroes() {
        return Promise.resolve(HEROES);
    }

    public getHero(id: number): Promise<Hero> {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}

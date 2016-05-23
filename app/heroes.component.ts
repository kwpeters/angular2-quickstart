import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@Component({
    selector: "my-heroes",
    templateUrl: "app/heroes.component.html",
    styleUrls:   ["app/heroes.component.css"],
    directives: [HeroDetailComponent],
    providers: []
})
export class HeroesComponent implements OnInit {
    public title: string = "Tour of Heroes";
    public heroes: Hero[];
    public selectedHero: Hero;

    private _router: Router;
    private _heroService: HeroService;

    constructor(router: Router, heroService: HeroService) {
        this._router      = router;
        this._heroService = heroService;
    }

    public ngOnInit() {
        this.getHeroes();
    }

    public getHeroes(): void {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public gotoDetail(hero: Hero): void {
        let link = ["HeroDetail", {id: hero.id}];
        this._router.navigate(link);
    }
}



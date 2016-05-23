import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    selector: "my-dashboard",
    templateUrl: "app/dashboard.component.html",
    styleUrls: ["app/dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

    public heroes: Hero[] = [];
    private _router: Router;
    private _heroService: HeroService;

    constructor(router: Router, heroService: HeroService) {
        this._router = router;
        this._heroService = heroService;
    }

    public ngOnInit(): void {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    public gotoDetail(hero: Hero): void {
        let link = ["HeroDetail", {id: hero.id}];
        this._router.navigate(link);
    }

}

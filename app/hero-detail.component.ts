import {Component, OnInit} from "@angular/core";
import {RouteParams} from "@angular/router-deprecated";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    selector: "my-hero-detail",
    templateUrl: "/app/hero-detail.component.html",
    styleUrls: ["app/hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
    public hero: Hero;
    private _heroService: HeroService;
    private _routeParams: RouteParams;

    constructor(heroService: HeroService, routeParams: RouteParams) {
        this._heroService = heroService;
        this._routeParams = routeParams;
    }
    
    public ngOnInit(): void {
        let id: number = +this._routeParams.get("id");
        this._heroService.getHero(id).then(
            hero =>  this.hero = hero
        );
    }

    public goBack(): void {
        window.history.back();
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from './api/endpoints.service';
import { Observable, Subscription } from 'rxjs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    menuActive: boolean;
    activeMenuId: string;
    darkDemoStyle: HTMLStyleElement;
    routes: Array<string> = [];
    filteredRoutes: Array<string> = [];
    searchText: string;
    private userLoggedIn: boolean;
    private subscription: Subscription;
    private userName: string;
    constructor(private router: Router, private services: EndpointsService) { }

    // If user is logged in or not, set value to true or false
    private setLoggedIn(value: boolean): void {
        this.services.setLoggedIn(value);
    }
    ngOnInit() {
        this.userName = this.services.getUserName;
        //get status user loggedin or not
        this.subscription = this.services.getLoggedIn().subscribe(value => {
            this.userLoggedIn = value;
        });
        if (this.services.userToken) {
            this.setLoggedIn(true);
            this.router.navigate([''])
        }
        else {
            if (!(this.router.url == 'login' || this.router.url == 'register')) {
                this.router.navigate(['login'])
            }
            this.setLoggedIn(false);
        }
        let routes = this.router.config;
        for (let route of routes) {
            if (route.path && route.path !== "datatable" && route.path !== "datagrid" && route.path !== "datalist" && route.path !== "datascroller" && route.path !== "growl")
                this.routes.push(route.path.charAt(0).toUpperCase() + route.path.substr(1));
        }
    }

    logout() {
        this.setLoggedIn(false);
        this.services.setUserToken = "";

        // this.services.getAccessToken();
        this.router.navigate(['login']);
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    selectRoute(routeName) {
        this.router.navigate(['/' + routeName.toLowerCase()]);
        this.filteredRoutes = [];
        this.searchText = "";
    }

    filterRoutes(event) {
        let query = event.query;
        this.filteredRoutes = this.routes.filter(route => {
            return route.toLowerCase().includes(query.toLowerCase());
        });
    }

    changeTheme(event: Event, theme: string, dark: boolean) {
        let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/components/themes/' + theme + '/theme.css';

        if (dark) {
            if (!this.darkDemoStyle) {
                this.darkDemoStyle = document.createElement('style');
                this.darkDemoStyle.type = 'text/css';
                this.darkDemoStyle.innerHTML = '.implementation { background-color: #3f3f3f; color: #dedede} .implementation > h3, .implementation > h4{ color: #dedede}';
                document.body.appendChild(this.darkDemoStyle);
            }
        }
        else if (this.darkDemoStyle) {
            document.body.removeChild(this.darkDemoStyle);
            this.darkDemoStyle = null;
        }

        event.preventDefault();
    }

    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }
}

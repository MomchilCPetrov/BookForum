import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";

@Injectable()
export class Auth implements CanActivate {

    constructor(private router: Router, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { authenticationRequired, autheticationFailUrl } = route.data;

        if (typeof authenticationRequired === 'boolean' && authenticationRequired === this.userService.isLogged) {
            return true;
        }

        let authRedirectUrl = autheticationFailUrl;
        if (authenticationRequired) {
            console.log(route.url);
            const loginRedirectUrl = route.url.reduce((accu, curr) => `${accu}/${curr.path}` , '');
            authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`;
        }
        console.log(authRedirectUrl)
        return this.router.parseUrl(authRedirectUrl || '/');
    }

}
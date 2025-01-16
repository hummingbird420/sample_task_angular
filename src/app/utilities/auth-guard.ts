import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const token = localStorage.getItem('_TOKEN_')?.toString() ?? '';

        if (token) {
            // Prevent logged-in users from accessing the sign-in page
            if (state.url === '/auth/sign-in') {
                return this.router.createUrlTree(['/authorized/patients']);
            }
            return true; // Allow access to other routes
        } else {
            // Allow unauthenticated users to access anonymous routes
            if (state.url.startsWith('/anonymous')) {
                return true;
            }
            // Redirect unauthenticated users to the anonymous users route
            return this.router.createUrlTree(['/anonymous/users']);
        }
    }
}

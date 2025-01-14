import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthorizedService {
    constructor(private http: HttpClient) { }

    getUserByLogin(obj: any): Observable<any[]> {
        return this.http.post<any[]>("accounts/sign-in", obj);
    }
    postUserData(obj: any): Observable<any[]> {
        return this.http.post<any[]>("accounts/sign-up", obj);
    }

}
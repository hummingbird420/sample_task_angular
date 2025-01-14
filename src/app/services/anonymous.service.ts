import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AnonymousService {
    constructor(private http: HttpClient) { }

    fetchUses(): Observable<any[]> {
        return this.http.get<any[]>("https://localhost:7231/rk/api/EfUserInfo");
    }


}
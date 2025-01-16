import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { ToastService } from "../services/toast-service";


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    dead$ = new Subject();
    access_token: string = "";
    expire_in: string = "";
    constructor(private toastService: ToastService) {
        const token = localStorage.getItem("_TOKEN_")?.toString() ?? "";
        if (token) {
            this.access_token = token;
        }
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.url.indexOf("/assets/") > -1) {
            return next.handle(request);
        }


        if (!request.url.startsWith("http://") && !request.url.startsWith("https://")) {
            request = request.clone({
                url: environment.apiUrl + request.url,
            });
        }


        if (this.access_token) {
            request = request.clone({
                headers: request.headers.append("Authorization", "Bearer " + this.access_token),
            });
        }


        return next.handle(request).pipe(
            map((event: any) => {
                if (event instanceof HttpResponse) {

                }
                return event;
            }),
            catchError((error) => {
                let err = error.error.errors.Password[0];
                console.log(err);

                this.toastService.show(2, err);
                return throwError(error);
            })
        );
    }
}


export const ApiInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
];

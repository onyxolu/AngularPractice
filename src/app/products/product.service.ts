import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private productUrl = '../../assets/products/products.json';

    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse){
        console.log('chai');
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = 'An error occured:' + err.error.message;
        } else {
            errorMessage = 'Server returned code: ' + err.status + ', errror message is' + err.message;
            console.log('HI');
        }
        console.error('errorMessage');
        return throwError(errorMessage);
    }
}


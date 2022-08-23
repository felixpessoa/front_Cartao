import { Cartao } from './cartoes.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(cartao: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>(this.baseUrl, cartao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readByRendaAte(renda: number): Observable<Cartao[]> {
    const url = `${this.baseUrl}/cartoes?renda=${renda}`;
    return this.http.get<Cartao>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY
  }
}

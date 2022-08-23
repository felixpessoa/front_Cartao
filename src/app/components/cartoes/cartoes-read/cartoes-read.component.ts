import { CartaoService } from './../cartao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartao } from './../cartoes.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cartoes-read',
  templateUrl: './cartoes-read.component.html',
  styleUrls: ['./cartoes-read.component.css']
})
export class CartoesReadComponent implements OnInit {

  value = '2000';
  cartoes: Cartao[] = []

  displayedColumns: string[] = ['registro', 'cartao', 'bandeira', 'renda', 'limite'];
  dataSource = new MatTableDataSource<Cartao>(this.cartoes);

  constructor(
    private cartaoService: CartaoService
  ) { }

  ngOnInit(): void {
  }

  rendaAte(renda: string): void {

    const id = +renda
    this.cartaoService.readByRendaAte(id).subscribe(cartao => {
      this.cartoes = cartao
      console.log(cartao)
    });
  }

  


}

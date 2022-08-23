import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoes-crud',
  templateUrl: './cartoes-crud.component.html',
  styleUrls: ['./cartoes-crud.component.css']
})
export class CartoesCrudComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToCreate():void {
    this.router.navigate(['tecnicos/create']);
  }

}

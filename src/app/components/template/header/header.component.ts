import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(
    private readonly oauthService: OAuthService
    ) { }

  ngOnInit(): void {
  }


  logout() { 
    this.oauthService.logOut(); 
  }

}

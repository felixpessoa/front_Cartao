import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfigModule } from './components/auth/auth.config.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CartoesCrudComponent } from './views/cartoes-crud/cartoes-crud.component';
import { CartoesReadComponent } from './components/cartoes/cartoes-read/cartoes-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    CartoesCrudComponent,
    CartoesReadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    LayoutModule,
    AuthConfigModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080/'],
          sendAccessToken: true
      }
  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

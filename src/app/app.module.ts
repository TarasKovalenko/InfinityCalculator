import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { CalcComponent } from './calc-component/calc-component.component';

import { AppRoutes } from './app.routing';
import { AuthGuard } from './auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

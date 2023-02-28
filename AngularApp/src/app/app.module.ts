import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './app.server.service';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: '', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    InfoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  // Tutaj trzeba dodać @Injectable bo inaczej nie działa
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }


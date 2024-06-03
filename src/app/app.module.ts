import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrpipePipe } from './drpipe.pipe';
import { MedecinComponent } from './medecin/medecin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AproposComponent } from './apropos/apropos.component';
import { MessageContactComponent } from './message-contact/message-contact.component';
import { RegiterFormComponent } from './regiter-form/regiter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DrpipePipe,
    MedecinComponent,
    ListUsersComponent,
    ListPostsComponent,
    ListProvidersComponent,
    AddProviderComponent,
    UpdateProviderComponent,
    NavbarComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    AproposComponent,
    MessageContactComponent,
    RegiterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

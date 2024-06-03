import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { RegiterFormComponent } from './regiter-form/regiter-form.component';



const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  {
    path: "listeProviders",
    component: ListProvidersComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "addProvider",
    component: AddProviderComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "updateProvider/:id",
    component: UpdateProviderComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: 'register',
    component:RegiterFormComponent
  },
  {
    path: 'dashbaordAdmin',
    loadChildren: () => import('./dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

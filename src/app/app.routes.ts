import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoGuardRotaGuard } from './shared/guard/noguard-rota.guard';
import { GuardRotaGuard } from './shared/guard/guard-rota.guard';

export const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [NoGuardRotaGuard]},
  {path: 'inicio', component: InicioComponent, canActivate: [GuardRotaGuard]},
];

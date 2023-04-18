import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ViewCityComponent } from './view-city/view-city.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: CitiesComponent, canActivate: [AuthGuard] },
  { path: 'authenticate', component: AuthComponent },
  { path: ':cityCode', component: ViewCityComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

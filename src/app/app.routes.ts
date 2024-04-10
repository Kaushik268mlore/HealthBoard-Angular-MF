import { RouterModule, Routes } from '@angular/router';
import { ApplyAppComponent } from './apply-app/apply-app.component';
import { ViewAppComponent } from './view-app/view-app.component';
import { NgModule } from '@angular/core';
import { QueryAppComponent } from './query-app/query-app.component';

export const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'apply-application' },
    {path:'apply', component:ApplyAppComponent},
    {path:'view', component:ViewAppComponent},
    {path:'contact',component:QueryAppComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class AppRoutes { }
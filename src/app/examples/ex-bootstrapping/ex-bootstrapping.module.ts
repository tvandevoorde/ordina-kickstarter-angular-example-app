import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrappingComponent } from './components/bootstrapping/bootstrapping.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularStartComponent } from './components/angular-start/angular-start.component';

const routes: Routes = [
  { path: 'examples/bootstrapping', component: BootstrappingComponent },
  { path: 'examples/bootstrapping/start', component: AngularStartComponent }
];

@NgModule({
  declarations: [BootstrappingComponent, AngularStartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExBootstrappingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExPipesComponent } from './components';
import { InszPipe } from './pipes';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import localeJaExtra from '@angular/common/locales/extra/ja';

registerLocaleData(localeJa, localeJaExtra);

const routes: Routes = [
  { path: 'examples/pipes', component: ExPipesComponent }
];

@NgModule({
  declarations: [
    InszPipe,
    ExPipesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExPipesModule { }

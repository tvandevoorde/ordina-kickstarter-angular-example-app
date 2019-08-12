import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ExComponentLifecycleHooksModule } from './components/ex-component-lifecycle-hooks/ex-component-lifecycle-hooks.module';
import { ExComponentsTodoModule } from './components/ex-components/ex-components-todo.module';
import { ExComponentsTemplateModule } from './components/ex-component-templates/ex-components-template.module';
import { ExComponentsInteractionsModule } from './components/ex-component-interaction/ex-components-interactions.module';

import {
  ExComponentsComponent,
  ExComponentLifecycleHooksComponent,
  ExComponentInteractionComponent,
  ExComponentTemplatesComponent
} from './components';

const routes: Routes = [
  { path: 'examples/components', component: ExComponentsComponent },
  { path: 'examples/components/lifecycle-hooks', component: ExComponentLifecycleHooksComponent },
  { path: 'examples/components/interaction', component: ExComponentInteractionComponent },
  { path: 'examples/components/templates', component: ExComponentTemplatesComponent }
];

@NgModule({
  declarations: [
    ExComponentsComponent,
    ExComponentInteractionComponent,
    ExComponentTemplatesComponent,
    ExComponentLifecycleHooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExComponentLifecycleHooksModule,
    ExComponentsTodoModule,
    ExComponentsTemplateModule,
    ExComponentsInteractionsModule,
    RouterModule.forChild(routes)
  ]
})
export class ExComponentsModule { }

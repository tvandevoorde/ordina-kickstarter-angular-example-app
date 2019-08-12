import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  AfterContentComponent,
  AfterContentParentComponent,
  ChildComponent
} from './components/after-content';

import {
  AfterViewComponent,
  AfterViewParentComponent,
  ChildViewComponent
} from './components/after-view';

import {
  CounterParentComponent,
  MyCounterComponent
} from './components/counter';

import {
  DoCheckComponent,
  DoCheckParentComponent
} from './components/do-check';

import {
  OnChangesComponent,
  OnChangesParentComponent
} from './components/on-changes';

import {
  PeekABooComponent,
  PeekABooParentComponent
} from './components/peek-a-boo';

import {
  SpyParentComponent,
  SpyDirective
} from './components/spy';

@NgModule({
  declarations: [
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    CounterParentComponent,
    MyCounterComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    CounterParentComponent,
    MyCounterComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective
  ]
})
export class ExComponentLifecycleHooksModule { }

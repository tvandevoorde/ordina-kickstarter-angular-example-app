import { NgModule } from '@angular/core';
import { LogService } from './services/log.service';
import { ExLifecycleHooksComponent } from './components/ex-lifecycle-hooks.component';

@NgModule({
  declarations: [
    ExLifecycleHooksComponent
  ],
  imports: [],
  exports: [],
  providers: [
    LogService
  ]
})
export class ExLifecycleHooksModule {}

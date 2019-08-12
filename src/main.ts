import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const appDelay = 1000;

// Emulating a load time to demo bootstrapping
// see index.html <app-root> content
setTimeout(() => {

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

}, appDelay );

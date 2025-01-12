import { APP_INITIALIZER, ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { globalErrorHandler } from './errorhandler.service';
//import { HttpClientModule } from '@angular/common/http';

function initFactory(initService: InitService) {
  return () => initService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([requestInterceptor])),
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: globalErrorHandler
    }
  ]
//  ,imports: [HttpClientModule] // Add HttpClientModule here
};

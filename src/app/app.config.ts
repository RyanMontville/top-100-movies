import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {NgFor, NgForOf} from "@angular/common";
import { MovieService } from './movies.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), MovieService],
};

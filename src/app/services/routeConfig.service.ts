import { Inject, InjectionToken } from "@angular/core";
import { RouteConfig } from "./routeConfig";

export const routeConfig = new InjectionToken<RouteConfig>('routeConfig');
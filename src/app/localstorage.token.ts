import { InjectionToken } from "@angular/core";

export const LOCALSTORAGE_TOKEN = new InjectionToken<any>('localstorage_token', {
  providedIn: 'root',
  factory() {
    return localStorage;
  }
});
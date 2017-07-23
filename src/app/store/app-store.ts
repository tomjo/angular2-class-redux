import {InjectionToken} from "@angular/core";
import { createStore, combineReducers } from 'redux';
import {ROOT_REDUCER} from "./root-reducer";

export const APP_STORE = new InjectionToken('appStore');

export function appStoreFactory() {
  return createStore(combineReducers(ROOT_REDUCER));
}

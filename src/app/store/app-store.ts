import {InjectionToken} from "@angular/core";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {ROOT_REDUCER} from "./root-reducer";
import {crashReporter, logger} from "./middleware";

export const APP_STORE = new InjectionToken('appStore');

export function appStoreFactory() {
  return createStore(combineReducers(ROOT_REDUCER), applyMiddleware(logger, crashReporter));
}

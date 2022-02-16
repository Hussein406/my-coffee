import { EntityState } from "@ngrx/entity";
import { routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";

export interface AppState {}



export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
      // console.log("* State before: ", state);
      // console.log("** Action", action);
  
      return reducer(state, action);
    };
  }

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

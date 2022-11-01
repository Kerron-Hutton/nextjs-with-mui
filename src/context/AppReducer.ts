import { Reducer } from "react";
import { AppState, AppTheme } from "../models/AppState";

export enum ActionType {
  SET_THEME_MODE,
}

export interface ReducerAction {
  payload?: AppTheme;
  type: ActionType;
}

export const AppReducer: Reducer<AppState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SET_THEME_MODE:
      return { ...state, theme: action.payload! };
    default:
      throw new Error();
  }
};

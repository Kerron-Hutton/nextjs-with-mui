import { AppState } from "../models/AppState";
import { AppReducer, ReducerAction } from "./AppReducer";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";

const initState: AppState = {
  theme: "light",
};

interface AppContextType {
  dispatch: Dispatch<ReducerAction>;
  state: AppState;
}

let AppContext = createContext<AppContextType>({
  dispatch: () => null,
  state: initState,
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);

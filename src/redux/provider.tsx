"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type providerProps = { children: ReactNode };

export function Providers({ children }: providerProps) {
  return <Provider store={store}>{children}</Provider>;
}

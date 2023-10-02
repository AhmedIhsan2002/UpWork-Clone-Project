"use client"
import StyledComponentsRegistry from "@/app/lib/registry";
import AuthProvider from "@/context/AuthContext";
import store from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type StyledProviderProps = {
  children: ReactNode;
}

const StyleProvider = ({ children }: StyledProviderProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </AuthProvider>
    </Provider>
  );
};

export default StyleProvider;

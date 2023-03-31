import store from "@/store/store";
import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";

export const withRedux = (app: (props: AppProps) => React.ReactNode) => {
  const WithRedux = (props: AppProps) => {
    return <Provider store={store}>{app(props)}</Provider>;
  };

  return WithRedux;
};

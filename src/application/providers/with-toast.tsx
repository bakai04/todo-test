import { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const withToast = (app: (props: AppProps) => React.ReactNode) => {
  const WithToast = (props: AppProps) => {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {app(props)}
      </>
    );
  };

  return WithToast;
};

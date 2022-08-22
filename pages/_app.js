import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import Loader from "./resources/Loader/Loader";
import * as ga from "../lib/ga";
import "bootstrap/dist/css/bootstrap.css";
import "styles/scss/nextjs-material-kit.scss?v=1.2.0";
import "public/css/index.css";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(<Loader />, document.getElementById("page-transition"));
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default (props) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Bdata</title>
        <script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-HG5BPBLEBL`}
        />
        <script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-HG5BPBLEBL', {
                    page_path: window.location.pathname,
                    });
                `}
        </script>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Cookie from "../components/Cookie/Cookie";
// import { IoArrowUp } from "react-icons/io5";
// import App from "next/app";
import Head from "next/head";
import TagManager from "react-gtm-module";
import Router from "next/router";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Loader from "../components/Loader/Loader";
import * as ga from "../lib/ga";
import "bootstrap/dist/css/bootstrap.css";
import "styles/scss/nextjs-material-kit.scss?v=1.2.0";
import "public/css/index.css";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
const Logo = require("public/img/logo.svg");

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

const tagManagerArgs = {
  gtmId: "GTM-MSDPSDK",
};

export default (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BDATA Solutions Inc</title>
        <meta
          name="description"
          content={
            "BDATA BIoT Security: Apply zero trust using BIoT device immutable fingerprint"
          }
        />
        <meta
          name="keywords"
          content="BIoT, BIoT Security, IoT, Finger Print, Immutable Finger Print, Zero Trust"
        />
        <meta
          property="og:description"
          content="BDATA BIoT Security: Apply zero trust using BIoT device immutable fingerprint"
          key="description"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="BDATA BIoT Security" />
        <meta property="og:image" content={Logo} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="bdata.ca" />
        <link
          rel="canonical"
          property="og:title"
          content="BDATA BIoT Security"
          key="title"
          href="bdata.ca"
        ></link>
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
      <Cookie />
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}

      {/* {showButton && (
        <div onClick={scrollToTop} className="back-to-top">
          <IoArrowUp />
        </div>
      )} */}
    </React.Fragment>
  );
};

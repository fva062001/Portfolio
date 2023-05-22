import "@/styles/global.css";
import Script from "next/script";

export default function App({Component, pageProps}) {
  return (
    <>
      <Script
        async
        src={
          "https://www.googletagmanager.com/gtag/js?id=G-ZE8HG6L9N4"
        }></Script>
      <Script async>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZE8HG6L9N4');`}</Script>

      <Component {...pageProps} />
    </>
  );
}

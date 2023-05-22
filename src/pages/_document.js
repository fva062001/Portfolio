import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Fernando's Portfolio" />
      <body>
        <Main />
        <NextScript />
      </body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZE8HG6L9N4"></script>
      <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZE8HG6L9N4');
      </script>
    </Html>
  );
}

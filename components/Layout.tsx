import { ReactNode } from "react";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="bg-jungle-green-500">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Leo Ding Hao" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leodh.dev/" />
        <meta property="og:title" content="Portfolio - Leo Ding Hao" />
        <meta
          property="og:description"
          content="Hey there! My name is Leo Ding Hao and I am an aspiring software engineer who is interested in front-end development. Click to find out more!"
        />
        <meta property="og:image" content="https://leodh.dev/thumbnails/portfolio.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://leodh.dev/" />
        <meta property="twitter:title" content="Portfolio - Leo Ding Hao" />
        <meta
          property="twitter:description"
          content="Hey there! My name is Leo Ding Hao and I am an aspiring software engineer who is interested in front-end development. Click to find out more!"
        />
        <meta property="twitter:image" content="https://leodh.dev/thumbnails/portfolio.png" />
      </Head>
      <Navigation />
      <main className="text-gray-300 desktop:ml-desktop-nav desktop:p-4">
        <div className="bg-shark-500 desktop:rounded-xl">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

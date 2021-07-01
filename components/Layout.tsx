import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;

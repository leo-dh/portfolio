import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-shark-500">
      <Head>
        <title>leodh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="container mx-auto text-gray-300">{children}</main>
    </div>
  );
};

export default Layout;

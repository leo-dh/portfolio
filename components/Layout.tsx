import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-jungle-green-500">
      <Head>
        <title>leodh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="text-gray-300 desktop:ml-[320px] desktop:p-4">
        <div className="bg-shark-500 desktop:rounded-xl">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

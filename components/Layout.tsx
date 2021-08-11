import { ReactNode } from "react";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="bg-jungle-green-500">
      <Head>
        <title>leodh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="text-gray-300 desktop:ml-desktop-nav desktop:p-4">
        <div className="bg-shark-500 desktop:rounded-xl">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

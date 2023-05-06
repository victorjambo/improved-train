import Head from "next/head";
import React from "react";

const Header: React.FC = () => {
  return (
    <Head>
      <title>Supply Chain</title>
      <meta name="description" content="Supply Chain" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;

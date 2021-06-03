import React from "react";
import Head from "next/head";
import Header from "../components/header/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Podcast App</title>
        <meta name="description" content="Podcast app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
}

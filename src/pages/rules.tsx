import React, { useCallback } from "react";
import Head from "next/head";

// Views
import Default from "~/layouts/Default";

export default function Rules() {
  return (
    <>
      <Head>
        <title>CMS • Diamond</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>What is Lorem Ipsum?</h1>

      <br />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );
}

Rules.getLayout = function getLayout(page: React.ReactElement) {
  return <Default>{page}</Default>;
};

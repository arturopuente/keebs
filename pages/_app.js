import Head from "next/head";
import "../styles/tailwind.css";

export default function Keebs({ Component, pageProps }) {
  return (
    <div className={"w-full h-full bg-gray-900 text-white font-sans"}>
      <Head>
        <title>Keyboards by @arturopuente</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

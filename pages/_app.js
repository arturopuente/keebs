import "../styles/tailwind.css";

export default function Keebs({ Component, pageProps }) {
  return (
    <div className={"w-full h-full bg-gray-900 text-white font-sans"}>
      <Component {...pageProps} />
    </div>
  );
}

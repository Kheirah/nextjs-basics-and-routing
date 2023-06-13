import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(5);
  return <Component {...pageProps} count={count} setCount={setCount} />;
}

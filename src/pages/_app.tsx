import "@/styles/globals.css"
import type { AppProps } from "next/app";

//Fonts
import { rubik } from "@/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rubik.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

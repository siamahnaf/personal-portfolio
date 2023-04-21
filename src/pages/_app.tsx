import "@/styles/globals.css"
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "urql";

//Fonts
import { quicksand, rubik } from "@/Fonts";

//Graphql
import { client } from "@/Graphql/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${quicksand.variable} ${rubik.variable} font-sans`}>
        <Provider value={client}>
          <Component {...pageProps} />
          <Analytics />
        </Provider>
      </main>
    </ThemeProvider>
  )
}

import "@/styles/globals.css"
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

//Fonts
import { rubik } from "@/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${rubik.variable} font-sans bg`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

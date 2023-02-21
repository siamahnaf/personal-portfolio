import "@/styles/globals.css"
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

//Fonts
import { quicksand, rubik } from "@/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${quicksand.variable} ${rubik.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

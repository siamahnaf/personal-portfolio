import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black dark:bg-dark dark:text-white transition duration-300 ease-in pl-6 sm:pl-6 xxs:pl-3 pr-0.5 overflow-hidden">
        <div className="h-screen pr-5 sm:pr-5 xxs:pr-3 overflow-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-[#ffffff08] scrollbar-thumb-zinc-600 scrollbar-w-1.5">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
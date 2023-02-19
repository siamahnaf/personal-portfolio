import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black dark:bg-blue dark:text-white transition duration-300 ease-in px-6">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
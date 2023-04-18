import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black dark:bg-dark dark:text-white transition duration-300 ease-in px-10 lg:px-10 smd:px-6 msm:px-5 xxs:px-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
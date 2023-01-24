import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] background-animate">
        <Main />
        <div className="text-center pb-20">
          <p>Trained on the <a className="underline" href="https://archive.ics.uci.edu/ml/datasets/student+performance">UCI Machine Learning Repository</a></p>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}

import { Mulish } from "next/font/google"
import "./globals.css"

const inter = Mulish({ subsets: ["latin"] })

export const metadata = {
  title: "Creekbridge Capital LLC",
  description: "We buy homes fast.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}

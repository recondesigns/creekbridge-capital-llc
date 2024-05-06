import { Inter } from "next/font/google"
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Creekbridge Capital LLC",
  description: "We buy homes fast.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>This is a header</header>
        {children}
        <footer>This is a footer</footer>
      </body>
    </html>
  )
}

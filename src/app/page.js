"use client"
import Image from "next/image"
import creekbridgeCapitalLogo from "../../public/creek1.png"

export default function Home() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={creekbridgeCapitalLogo}
          width={200}
          height={200}
          alt="Creekbridge Capital logo."
        />

        <p style={{ paddingTop: "24px" }}>Check back soon...</p>
      </section>
    </main>
  )
}

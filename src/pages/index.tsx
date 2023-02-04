import About from "@/components/About";
import Front from "@/components/Front";
import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-col">
        <Header />

        <Front />

        <div className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-500">
          <About />
          <Knowledge />
        </div>
      </main>
    </>
  );
}

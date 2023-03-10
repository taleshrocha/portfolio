import About from "@/components/About";
import Footer from "@/components/Footer";
import Front from "@/components/Front";
import Further from "@/components/Further";
import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portfolio | Tales Rocha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden w-full h-full">
        <Header />

        <Front />

        <About />
        <Knowledge />
        <Projects />
        <Further />
        <Footer />
      </main>
    </div>
  );
}

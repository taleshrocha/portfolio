import About from "@/components/About";
import Front from "@/components/Front";
import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Head from "next/head";

export default function Home() {
  //<p>I love to read and I'am learning to play guitar. I also like pizza, but I'm lactose intolerant (didin't ask for that!)</p>
  //<p>I like to use fancy editors. Like Vim, though I'm still not mature enought to Emacs.</p>

  //<p>Some fun facts</p>
  //<p>
  //  I'am reading Game of Thrones
  //  I have lactose intolerance
  //</p>
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="flex-col">
        <Header/>

        <Front/>

        <About/>
        <Knowledge/>
      </main>
    </>
  );
}

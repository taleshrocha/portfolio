import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  //<p>I'm a programer living in Natal, RN. Brazil.</p>
  //<p>I study programing since 2020 in the Federal University of Rio
  //  Grande do Norte IMD and DIMAP (which is a second home).</p>
  //<p>I'm interested in Front and Back-end development.</p>
  //<p>Here are somethings that I know:</p>
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
      <main className="flex bg-sky-700 h-full min-h-screen items-center justify-center">
        <Header/>
        <p className="whitespace-pre font-bold text-5xl md:text-7xl
          text-white text-center">
          {"Hello world!\nMy name is\nTales Rocha"}
        </p>
      </main>
    </>
  );
}

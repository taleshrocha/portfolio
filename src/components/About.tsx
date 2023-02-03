export default function About() {
  return (
    <div className="flex items-center flex-col md:flex-row 
      z-10 relative h-full bg-gray-900 text-white">
      <img
        className="rounded-full w-52 mt-8 border-4 border-sky-700"
        src="https://avatars.githubusercontent.com/u/61332391?v=4"
        alt=""
      />
      <div className="px-10 py-20 font-semibold text-lg">
        <p>I'm a programer living in Brazil.</p>
        <p>
          I study programing since 2020
        </p>
        <p>I'm interested in Front and Back-end development.</p>
        <p>Here are somethings that I know:</p>
      </div>
    </div>
  );
}

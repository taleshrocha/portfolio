export default function Footer() {
  let circles = [];
  for (let index = 0; index < 10; index++) {
    circles.push(
      <li key={index} className=""></li>
    );
  }
  return (
    <div
      className="flex relative flex-col justify-center items-center h-[60vh]
        bg-gradient-to-t from-[#060c1c] to-[#091129]"
    >
      <div className="flex justify-between items-center w-2/3
        text-white text-lg">
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
      </div>
      <ul className="absolute top-0 left-0 w-full h-full circles">{circles}</ul>
    </div>
  );
}

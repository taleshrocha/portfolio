export default function Section({ children }: any) {
  return (
    <section
      className="
      flex relative z-10 items-center justify-center
      bg-gray-900 text-white
      flex-col px-5 py-10 space-x-8 h-full 
      md:flex-row 
      "
    >
      {children}
    </section>
  );
}

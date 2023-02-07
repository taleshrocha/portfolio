import youngMe from "@/assets/young-me-pc.jpg"
import Image from "next/image";

export default function Further() {
  return (
    <section className="section p-0 pb-10 md:pb-0 bg-gray-800">
        <Image
        className="md:w-[50vw]"
          width={2000}
          src={youngMe}
          alt="Young me"
        />
      <div className="section-div px-6 md:w-[50vw]">
        <h1 className="section-title">Let's go further!</h1>
        <p className="section-content">
          I'm Tales Rocha, a passionate programer actually living in Brazil. I
          study programing since 2020 and I'm interested in all about Front and
          Back-end web development. I'm also an undergraduate in IT at{" "}
        </p>
      </div>
    </section>
  );
}

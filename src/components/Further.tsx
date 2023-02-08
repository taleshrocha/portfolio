import youngMe from "@/assets/young-me-pc.jpg";
import Image from "next/image";

export default function Further() {
  return (
    <section id="Further" className="section p-0 pb-10 md:pb-0 bg-gray-800">
      <Image
        className="md:w-[50vw]"
        width={2000}
        src={youngMe}
        alt="Young me"
      />
      <div className="section-div px-6 md:w-[50vw]">
        <h1 className="section-title">Let's go further!</h1>
        <p className="section-content">
          Liked what you saw? Then you can checkout my{" "}
          <a
            className="text-blue-400 hover:text-purple-400 hover:underline"
            href="https://github.com/taleshrocha"
            target="_blank"
          >
            GitHub{" "}
          </a>{" "}
          and see the source code of this responsive and interactive portfolio{" "}
          <a
            className="text-blue-400 hover:text-purple-400 hover:underline"
            href="https://github.com/taleshrocha/portfolio"
            target="_blank"
          >
            here
          </a>
          . Also, you can message me via email:{" "}
          <a
            className="text-blue-400 hover:text-purple-400 hover:underline"
            href="mailto:taleshrochaz@gmail.com?subject=Let's talk!"
            target="_blank"
          >
            taleshrochaz@gmail.com.
          </a>
          <br />
          For more information, you can check out my{" "}
          <a
            className="text-blue-400 hover:text-purple-400 hover:underline"
            href="/curriculum-vitae-portuguese.pdf"
            target="_blank"
          >
            resume
          </a>{" "}
          (in Portuguese).
        </p>
      </div>
    </section>
  );
}

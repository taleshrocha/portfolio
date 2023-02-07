import youngMe from "@/assets/young-me-pc.jpg"
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
        Liked what you saw? Then you can see the source code of this responsive 
        and interactive portfolio here. Also, you can message me via 
        email: taleshrochaz@gmail.com. <br/>
        For more information, you can check out my resume.
        </p>
      </div>
    </section>
  );
}

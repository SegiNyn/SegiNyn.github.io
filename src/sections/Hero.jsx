import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(
      ".hero-3d-layout img",
      { y: "100%", filter: "brightness(0.5)" },
      { y: "0%", filter: "brightness(1)", duration: 2, ease: "power2.out" }
    );
  });


  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Segilola Mustapha, a full-stack developer based in Switzerland.
            </p>
            <div className="hero-text">
              <h1>
                Delivering
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Creating digital solutions</h1>
              <h1>Following best practices</h1>
            </div>
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <img src="/images/female-coder2.png" alt="" className="xl:pl-[200px]"/>
          </div>
        </figure>

      </div>

    </section>
  );
};

export default Hero;

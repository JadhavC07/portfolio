import Profile from "../assets/Images/my-prop.svg";
import svgImage from "../assets/Images/my-pc.svg";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // useEffect(() => {
  //   const textWrapper = document.querySelector(".ml11 .letters");
  //   textWrapper.innerHTML = textWrapper.textContent.replace(
  //     // eslint-disable-next-line no-control-regex
  //     /([^\x00-\x80]|\w)/g,
  //     "<span class='letter'>$&</span>"
  //   );

  //   const animation = anime
  //     .timeline({ loop: true })
  //     .add({
  //       targets: ".ml11 .line",
  //       scaleY: [0, 1],
  //       opacity: [0.5, 1],
  //       easing: "easeOutExpo",
  //       duration: 100,
  //     })
  //     .add({
  //       targets: ".ml11 .line",
  //       translateX: [
  //         0,
  //         document.querySelector(".ml11 .letters").getBoundingClientRect()
  //           .width + 10,
  //       ],
  //       easing: "easeOutExpo",
  //       duration: 700,
  //       delay: 100,
  //     })
  //     .add({
  //       targets: ".ml11 .letter",
  //       opacity: [0, 1],
  //       easing: "easeOutExpo",
  //       duration: 600,
  //       offset: "-=775",
  //       delay: (el, i) => 34 * (i + 1),
  //       complete: () => {
  //         animation.pause();
  //       },
  //     });

  //   return () => {
  //     animation.pause();
  //   };
  // }, []);

  return (
    <>
      <div className="flex justify-center py-12 bg-white">
        <div className="text-center p-20">
          <h1 className="text-4xl font-extrabold leading-5 mb-4 roboto-regula text-lime-500 ml11">
            {/* <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters">Full-Stack Developer</span>
            </span> */}
            <div className="text-5xl font-bold">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "I'm a Web Developer", // initially rendered starting point
                  1000,
                  "I'm a Front-End Developer",
                  1000,
                  "I'm a Back-End Developer",
                  1000,
                  "I'm a Full Stact Developer",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <h1 className="text-4xl font-bold mb-4 roboto-regula text-lime-500">
            <TypeAnimation
              sequence={["ALL", 500, "IN", 500, "ONE", 500]}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-2xl mb-4 home-font text-lime-500 opacity-95 roboto-regular">
            &quot;Designing the future, one line of code at a time. Your
            full-stack maestro of innovation and elegance.&quot;
          </h2>

          <div className="w-48 h-58 mx-auto rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              style={{ width: "210px" }}
              src={Profile}
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto text-center">
          <div className="inline-block relative" style={{ maxWidth: "860px" }}>
            <img src={svgImage} alt="SVG Image" />
          </div>
        </div>
      </div>
      <section
        className="text-black text-center py-16"
        style={{ backgroundColor: "rgb(58, 255, 9)" }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-3/5">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Hi, I’m Chandan. Nice to meet you.
              </h1>
              <h2 className="text-xl md:text-xl font-medium">
                With 6 months of internship experience and now serving as a
                junior software developer, I&apos;m actively building upon my
                skills and knowledge in the field. Eager to contribute, I
                approach each task with dedication, seeking opportunities for
                growth and striving to make impactful contributions to our
                projects.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// style={{ backgroundColor: "rgb(58, 255, 9)" }}
export default Home;

import Profile from "../assets/Images/my-prop.svg";

const About = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-36 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-16">
          <div
            className="flex items-center justify-center md:justify-start"
            data-aos="zoom-in-left"
          >
            <div className="bg-white rounded-lg shadow-md border border-lime-500 p-20 md:p-8">
              <img
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto md:mx-0 md:mr-4"
                src={Profile}
                alt="Profile"
              />
              <h3 className="text-xl md:text-3xl text-gray-800 font-semibold mt-4 md:mt-0">
                Chandan Jadhav
              </h3>
              <p className="text-base md:text-lg text-gray-600 mt-1">
                Full-Stack Developer | Frontend & Backend Developer
              </p>
              <div className="mt-2 md:mt-4">
                <a
                  href="https://www.linkedin.com/in/chandan-jadhav"
                  target="_blank"
                  className="text-white bg-blue-500 py-1 md:py-2 px-3 md:px-4 rounded-full inline-block mr-2"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/JadhavC07"
                  target="_blank"
                  className="text-white bg-gray-800 py-1 md:py-2 px-3 md:px-4 rounded-full inline-block mr-2"
                >
                  GitHub
                </a>
                <a
                  href="mailto:chandanjadhav5260@gmail.com"
                  target="_blank"
                  className="text-white bg-red-500 py-1 md:py-2 px-3 md:px-4 rounded-full inline-block mr-2"
                >
                  Email
                </a>
                <a
                  href="https://www.indeed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-indigo-500 py-1 md:py-2 px-3 md:px-4 rounded-full inline-block mt-4"
                >
                  Indeed
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg md:text-2xl text-gray-800 font-semibold mb-2">
              About Me
            </h4>
            <p className="text-sm md:text-lg text-gray-600">
              A passionate IT professional with over 6 month of Internship
              experience in web development. Specialized in full-stack
              development and proficient in various programming languages and
              tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

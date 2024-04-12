import fitness from "../assets/Images/fitgoal (1).png";
import fingoal from "../assets/Images/FinGoal.png";
import task from "../assets/Images/taskMang.webp";
import "../CSS/Projects.css";

const projectName = [
  {
    title: "FitPilot",
    description:
      "Developed FitPilot, a gamified web platform fostering healthy habits. Implemented personalized tracking and incentivized rewards through intuitive UI design",
    tech: "Java, Spring Boot, and ReactJS",
    role: "Developer",
    image: fitness,
  },
  {
    title: "FinGoal",
    role: "Developer",
    tech: "Java, Spring Boot, and ReactJS",
    image: fingoal,
    description:
      "Designed FinGoal, a dynamic web application, enabling users to set, track, and accomplish personal financial objectives. Developed an API for seamless goal management, showcasing expertise in full-stack development",
  },
  {
    title: "TaskFlow",
    role: "Developer",
    image: task,
    tech: "Java, Spring Boot, and ReactJS",
    description:
      "Crafted TaskFlow, a collaborative tool emphasizing server-side logic. Enhanced teamwork and productivity with real-time task tracking and project organization, showcasing full-stack development proficiency",
  },
];

const Project = () => {
  return (
    <div className="dark:bg-gray-950 h-screen">
      <div>
        <h1
          className="text-3xl pt-7 dark:text-lime-500 font-bold mb-8 text-lime-500 text-center"
          data-aos="fade-down"
        >
          Internship Projects
        </h1>
      </div>
      <section className="card-section flex lg:flex-row md:flex-row sm:flex-col min-[350px]:flex-col min-[350px]:mx-10 justify-between items-center mx-10">
        {projectName.map((project, index) => (
          <div
            className="card dark:border-2 mx-3 my-3 dark:border-lime-500 dark:hover:border-lime-500 border-2 border-gray-200 hover:border-gray-400"
            key={index}
          >
            <div className="card__image ">
              <img src={project.image} alt="Fitness" className="object-fill" />
            </div>
            <div className="card__content">
              <p className="card__title">{project.title}</p>
              <p className="card__title !text-lg">Role : {project.role}</p>
              <p className="card__description pb-3">
                <span className="text-black text-base font-bold">
                  Description :{" "}
                </span>{" "}
                {project.description}
              </p>
              <p className="card_tech">
                <span className="font-bold text-base">Technologies :</span>{" "}
                {project.tech}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;

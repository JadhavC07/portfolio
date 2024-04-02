import ResumeImage from "../assets/Resume/Chandan Jadhav Full-Stack-Developer_SVG_Resume.svg";
import ResumePDF from "../assets/Resume/Chandan Jadhav Full-Stack-Developer_Resume.pdf";

const Resume = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Resume
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
          <div className="text-center mt-4">
            <a
              href={ResumePDF}
              download="Chandan_Jadhav_Full_Stack_Developer_Resume.pdf"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Download PDF
            </a>
          </div>
          {/* Display PNG resume */}
          <img src={ResumeImage} alt="Resume" className="w-full h-auto" />
          {/* Provide download link for PDF resume */}
        </div>
      </div>
    </section>
  );
};

export default Resume;

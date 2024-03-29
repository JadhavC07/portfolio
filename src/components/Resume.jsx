import ResumePDF from "../assets/Resume/Chandan Jadhav Full-Stack-Developer_Resume.pdf";

const Resume = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Resume
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
          {/* Use an img tag to display your resume image */}
          {/* <img src={resumeImage} alt="Resume" className="w-full h-auto" /> */}
          <embed
            src={ResumePDF}
            type="application/pdf"
            title="Chandan Jadhav Resume"
            className="w-[52rem] h-[77rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;

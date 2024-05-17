import leaf from "../../assets/Images/new project.png";
import name from "../../assets/Images/newProject.png";
import blank from "../../assets/Images/clickonblanck.png";
import jalebi from "../../assets/Images/jalebiflowchart.png";
import pdf from "../../assets/Images/pdf.png";
import flowchart from "../../assets/Images/flowchart.png";
import recompile from "../../assets/Images/recompile.png";
import latextcode from "../../assets/Images/overleafcode.png";
import clearBefore from "../../assets/Images/clear1.png";
import clearAfter from "../../assets/Images/clear2.png";

const BlogOne = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-slate-400">
        <h1 className="text-4xl font-bold mb-6">
          How to Create a Flowchart Using ChatGPT and Overleaf
        </h1>
        <div className="space-y-4">
          <Step
            number="1"
            text="Download ChatGPT or open ChatGPT in a new browser tab."
          />
          <Step number="2" text="Open a new chat." />
          <Step
            number="3"
            text="Write down this prompt in your ChatGPT input box:"
          />
          <div className="bg-gray-300 dark:bg-blue-500 p-4 rounded-lg font-mono">
            Can you write a LaTeX code of a flowchart with shapes that
            illustrates the steps of this Python program?
          </div>
          <Step
            number="4"
            text="Now add your code next to the prompt like this:"
          />
          <CodeBlock
            className="dark:bg-blue-500"
            code={`Can you write a LaTeX code of a flowchart with shapes that illustrates the steps of this Python program? ==> import java.util.Scanner;

public class AgeVerify {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        if (age < 18) {
            System.out.println("You are not allowed, as you are below 18.");
        } else {
            System.out.println("You are allowed.");
        }
        scanner.close();
}`}
          />
          <Step number="5" text="Now copy the following code:" />

          <CodeBlock
            code={`\\documentclass{article}
\\usepackage{tikz}
\\usetikzlibrary{shapes.geometric, arrows}

\\tikzstyle{startstop} = [rectangle, rounded corners, minimum width=3cm, minimum height=1cm,text centered, draw=black, fill=red!30]
\\tikzstyle{process} = [rectangle, minimum width=3cm, minimum height=1cm, text centered, draw=black, fill=orange!30]
\\tikzstyle{decision} = [diamond, minimum width=3cm, minimum height=1cm, text centered, draw=black, fill=green!30]
\\tikzstyle{io} = [trapezium, trapezium left angle=70, trapezium right angle=110, minimum width=3cm, minimum height=1cm, text centered, draw=black, fill=blue!30]
\\tikzstyle{arrow} = [thick,->,>=stealth]

\\begin{document}

\\begin{tikzpicture}[node distance=2cm]

\\node (start) [startstop] {Start};
\\node (input) [io, below of=start] {Enter your age};
\\node (process1) [process, below of=input] {Read age};
\\node (decision) [decision, below of=process1, yshift=-0.5cm] {age < 18?};
\\node (process2a) [process, below of=decision, yshift=-1.5cm] {Print \"You are not allowed, as you are below 18.\"};
\\node (process2b) [process, right of=decision, xshift=4cm] {Print \"You are allowed.\"};
\\node (stop) [startstop, below of=process2a] {Stop};

\\draw [arrow] (start) -- (input);
\\draw [arrow] (input) -- (process1);
\\draw [arrow] (process1) -- (decision);
\\draw [arrow] (decision) -- node[anchor=east] {yes} (process2a);
\\draw [arrow] (decision) -- node[anchor=south] {no} (process2b);
\\draw [arrow] (process2a) -- (stop);
\\draw [arrow] (process2b) |- (stop);

\\end{tikzpicture}

\\end{document}`}
          />
          <Step number="6" text="Now go to the Overleaf website." />
          <Step number="7" text="If you don't have an account, create one." />
          <Step number="8" text="Click on 'New Project'." />
          <Image src={leaf} alt="New Project" />
          <Step number="9" text="Select 'Blank Project'." />
          <Image src={blank} alt="Blank Project" />
          <Step
            number="10"
            text='Name your project, for example "JalebiFlowchart", then click "Create".'
          />
          <Image src={name} alt="Project Name" />
          <Image src={jalebi} alt="Project Created" />
          <Step
            number="11"
            text="Clear the code section (remove all text inside the box)."
          />
          <Image src={clearAfter} alt="Code Cleared" />
          <Image src={clearBefore} alt="Code Cleared" />
          <Step number="12" text="Paste the code you copied from ChatGPT." />
          <Image src={latextcode} alt="Code Pasted" />
          <Step number="13" text="Click on the 'Recompile' button." />
          <Image src={recompile} alt="Recompile Button" />
          <Step number="14" text="Now, your flowchart is ready." />
          <Image src={flowchart} alt="Flowchart Ready" />
          <Step
            number="15"
            text="You can also download the PDF of this flowchart and save it on your device by clicking on the download icon."
          />
          <Image src={pdf} alt="Download Icon" />
        </div>
      </div>
    </div>
  );
};

const Step = ({ number, text }) => (
  <div className="flex items-start">
    <span className="font-bold text-lg mr-2">{number})</span>
    <p>{text}</p>
  </div>
);

const CodeBlock = ({ code }) => (
  <pre className="bg-gray-300 dark:bg-blue-500 p-4 rounded-lg overflow-x-auto">
    <code>{code}</code>
  </pre>
);

const Image = ({ src, alt }) => (
  <div className="flex justify-center my-4">
    <img src={src} alt={alt} className="rounded-lg shadow-lg" />
  </div>
);
export default BlogOne;

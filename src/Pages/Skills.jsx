import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import javalogo from "../assets/Images/logo/Java2.svg";
import js from "../assets/Images/logo/Javascript.svg";
import python from "../assets/Images/logo/python2.svg";
import react from "../assets/Images/logo/react 1.svg";
import jquery from "../assets/Images/logo/jquary.svg";
import express from "../assets/Images/logo/express.svg";
import bootstap from "../assets/Images/logo/bootstrap.svg";
import tailwind from "../assets/Images/logo/tailwind.svg";
import bulma from "../assets/Images/logo/bulma.svg";
import mysql from "../assets/Images/logo/mysql.svg";
import vscode from "../assets/Images/logo/vscode.svg";
import github from "../assets/Images/logo/github.svg";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="py-8 text-center  dark:bg-gray-950">
      <h1 className="text-3xl font-bold mb-8 text-lime-500" data-aos="fade-up">
        Skills
      </h1>

      {/* Programming Languages */}
      <div className="mb-8 border-lime-500 border rounded-lg p-10">
        <h2
          className="text-2xl font-semibold mb-4 text-lime-500"
          data-aos="fade-up"
        >
          Programming Languages
        </h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-1/10 p-2  text-lime-700 dark:text-lime-500"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="bg-transparent rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img src={javalogo} alt="JAVA" className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mt-2">JAVA</h3>
            <p className="text-sm text-gray-600 ">Description of Language 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img src={js} alt="Language 1 Logo" className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mt-2  text-lime-700 dark:text-lime-500">
              JavaScript
            </h3>
            <p className="text-sm text-gray-600">Description of Language 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src={python}
                alt="Language 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2  text-lime-700 dark:text-lime-500">
              Python
            </h3>
            <p className="text-sm text-gray-600">Description of Language 1</p>
          </div>
          {/* Add more programming languages here */}
        </div>
      </div>

      {/* Libraries */}
      <div className="border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">Libraries</h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-1/10 p-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img src={react} alt="Library 1 Logo" className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              ReactJs
            </h3>
            <p className="text-sm text-gray-600">Description of Library 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img src={jquery} alt="Library 1 Logo" className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              JQuery
            </h3>
            <p className="text-sm text-gray-600">Description of Library 1</p>
          </div>
          {/* Add more libraries here */}
        </div>
      </div>

      {/* Frameworks */}
      <div className="mb-8 border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">
          Frameworks
        </h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-1/10 p-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src={express}
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              ExpressJs
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src={bootstap}
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              Bootstrap
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src={tailwind}
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              Tailwind CSS
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          <div
            className="w-1/10 p-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src={bulma}
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              Bulma
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          {/* Add more frameworks here */}
        </div>
      </div>
      {/* Database */}
      <div className="mb-8 border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">Database</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/10 p-2">
            <div className="rounded-full w-28 h-28 flex items-center justify-center mx-auto">
              <img
                src={mysql}
                alt="Framework 1 Logo"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              MySQL
            </h3>
            <p className="text-sm text-gray-600">Description of Framework 1</p>
          </div>
          {/* Add more frameworks here */}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-8 border rounded-lg p-4 border-lime-500">
        <h2 className="text-2xl font-semibold mb-4 text-lime-500">Tools</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/10 p-2">
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img src={vscode} alt="Tool 1 Logo" className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              VS Code
            </h3>
            <p className="text-sm text-gray-600">Description of Tool 1</p>
          </div>
          <div className="w-1/10 p-2">
            <div className="rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img src={github} alt="Tool 1 Logo" className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mt-2 dark:text-lime-500 text-lime-700">
              GitHub
            </h3>
            <p className="text-sm text-gray-600">Description of Tool 1</p>
          </div>
          {/* Add more tools here */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

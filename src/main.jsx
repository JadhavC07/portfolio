import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/portfolio/",
//     element: <App />,
//     children: [
//       {
//         path: "/portfolio/",
//         element: <Home />,
//       },
//       {
//         path: "/portfolio/home",
//         element: <Home />,
//       },
//       {
//         path: "/portfolio/about",
//         element: <About />,
//       },
//       {
//         path: "/portfolio/skills",
//         element: <Skills />,
//       },
//       {
//         path: "/portfolio/resume",
//         element: <Resume />,
//       },
//       {
//         path: "/portfolio/projects",
//         element: <Projects />,
//       },
//       {
//         path: "/portfolio/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/portfolio/projects",
//         element: <Projects />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

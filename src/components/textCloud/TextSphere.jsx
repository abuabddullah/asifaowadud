import TagCloud from "TagCloud";
import { useEffect } from "react";
import "./TextSphere.css";

const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Git",
        "GitHub",
        "Heroku",
        "Codepen",
        "Figma",
        "Stripe",
        "Postman",
        "Chrome Dev Tool",
        "Vs Code",
        "Photopea",
        "Vercel",
        "Netlify",
        "React JS",
        "Node JS",
        "Express JS",
        "Redux tool kit",
        "HTML 5",
        "CSS 3",
        "BootStrap 5",
        "Tailwind",
        "React-router",
        "React Hook",
        "JWT Token System",
        "JavaScript (ES6)",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <div className="text-Cloud">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return 0;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return 0;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentElement = box[0].parentElement;
      if (!parentElement) return 0;
      const parentWidth = parentElement.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        pinType: "transform",
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Neon Verse",
              category: "3D Interactive Environment",
              tools: "Three.js, GSAP",
              description: "Interactive Visualizations",
              image: "/images/neon-verse.webp"
            },
            {
              name: "Prompt Genius",
              category: "AI Content Portfolio",
              tools: "React, AI APIs",
              description: "Design Concept",
              image: "/images/prompt-genius.webp"
            },
            {
              name: "Sonic Wave",
              category: "Real-time Audio Reactive Art",
              tools: "Web Audio API",
              description: "Interactive Visualizations",
              image: "/images/Sonic Wave.webp"
            },
            {
              name: "Quantum Quill",
              category: "Real-time Collaborative Editor",
              tools: "WebSockets, React, State Management",
              description: "Design Concept",
              image: "/images/Quantum Quill.webp"
            },
            {
              name: "Atlas Analytics",
              category: "Geospatial Dashboard",
              tools: "Data Visualization, 3D Globe API, Real-time Panels",
              description: "Design Concept",
              image: "/images/Atlas Analytics.webp"
            },
            {
              name: "Aether AR",
              category: "Augmented Reality Studio",
              tools: "WebXR, 3D Object Libraries, Spatial Viewport",
              description: "Design Concept",
              image: "/images/Aether AR.webp"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <h4 style={{marginTop: "20px"}}>Description</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

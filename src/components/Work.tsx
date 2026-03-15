import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Air Crash Investigation",
    stat: "230K Subscribers",
    category: "Aviation Disaster Niche",
    description:
      "230K subscribers and counting. We break down history's most devastating aviation disasters using detailed in-house animations, expert analysis, and forensic storytelling — from black box data to human error. Every episode reveals what really happened and why it changed the skies forever.",
    image: "/images/aviation-accidents.png",
    url: "https://www.youtube.com/@Aviationaccidents",
    isLogo: true,
  },
  {
    title: "Textify Stories",
    stat: "Viral Story Content",
    category: "Reddit & Story Niche",
    description:
      "Bite-sized, binge-worthy stories that dominate the algorithm. Animated text overlays, punchy AI voiceover, and tight editing keep viewers watching from hook to end screen — built for watch time and shares.",
    image: "/images/textify.png",
    url: "https://www.youtube.com/@textify.stories",
    isLogo: true,
  },
  {
    title: "The Gun Warehouse",
    stat: "Firearms & Defense Niche",
    category: "Product & Review Niche",
    description:
      "Premium product-style editing, expert scripting, and authority-building content designed for a passionate firearms audience. Every video is built for retention, search visibility, and monetization across multiple revenue streams.",
    image: "/images/gunwarehouse.png",
    url: "https://www.youtube.com/@TheGunWarehouse",
    isLogo: true,
  },
  {
    title: "35+ Channels Built",
    stat: "Robustors Portfolio",
    category: "Multi-Niche Production Studio",
    description:
      "From aviation to true crime, firearms to finance — our 35-person in-house studio has built, grown, and monetized channels across every major faceless niche. We handle everything: niche research, scripting, production, SEO, and growth strategy.",
    image: "/images/35 channels.png",
    url: "https://www.robustors.com",
    isLogo: true,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Channels <span>Built</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>
                          {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" data-cursor="disable" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--accentColor)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "inherit")}>
                              {project.title}
                            </a>
                          ) : project.title}
                        </h4>
                        <p className="carousel-category">
                          {project.stat} · {project.category}
                        </p>
                      </div>
                    </div>
                    <div className={`carousel-image-wrapper${project.isLogo ? " carousel-image-logo" : ""}`}>
                      <WorkImage image={project.image} alt={project.title} link={project.url} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

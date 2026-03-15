import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          MY JOURNEY <span>&</span>
          <br /> STORY
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Solo Faceless Creator</h4>
                <h5>Independent</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Started building faceless YouTube channels from scratch. No face no following no blueprint. Tested niches cracked the algorithm and grew the first channel to monetization entirely solo.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Built the Studio</h4>
                <h5>Robustors (Early Stage)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Scaled from solo creator to a production studio. Built an in house team of editors scriptwriters and strategists. Started delivering branded faceless channels for clients across multiple niches and industries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder Robustors</h4>
                <h5>Robustors.com</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a 35 person in house team building faceless YouTube brands for individuals and companies globally. Our channels span aviation true crime firearms storytelling and beyond. Millions of views and growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

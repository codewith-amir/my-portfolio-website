import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Completing Java-based programming assignments, practising core OOP principles (encapsulation, inheritance, polymorphism), and strengthening logical thinking through consistent coding practice.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSCS (Computer Science)</h4>
                <h5>National University of Modern Languages</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing Bachelor's in Computer Science. Focus areas include Object-Oriented Programming (OOP), Data Structures, and Algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (F.Sc Pre-Medical)</h4>
                <h5>MAO Graduate College, Lahore</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed intermediate studies with 65% marks in F.Sc Pre-Medical.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Govt Higher Secondary School, Chak Bedi</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed matriculation with 915/1100 marks (83.7%). Won 2nd Position in a Divisional Quiz Competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

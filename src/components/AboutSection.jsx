import images from '../assets/my pic.png'
function AboutSection () {
  return (
      <div className="about-section" id='About me'>
          <div className="vector-container">
          <img src={images} alt="Vector" />
          </div>
          <div className="content-container">
              <h2>About me</h2>
              <p>
                  My self Hritik Kumar Bhadani Aspiring AI and Machine Learning Enthusiast with a strong passion for
                  leveraging cutting-edge technology to solve complex problems. Currently pursuing B.Tech to enhance my
                  skills in AI and ML. Demonstrated proficiency in Python language and in TensorFlow and PyTorch, which are
                  machine learning modules. While I am in the early stages of my career and lack direct experience, I am a
                  fast learner and enthusiastic about acquiring new knowledge. Committed to continuous learning and excited
                  to contribute to innovative projects in the field of AI and ML.
              </p>
              <a href='https://drive.google.com/file/d/1BJMmHaW29lDt38PaS0xJ-on7DK5M7dAV/view?usp=drivesdk'>
              <button>
                  Download CV
                  </button></a>
          </div>
      </div>
  );
};

export default AboutSection;
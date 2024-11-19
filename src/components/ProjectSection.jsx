import images1 from '../assets/Project 1.svg'
import images2 from '../assets/Project 2.svg'
import images3 from '../assets/Project 3.svg'
import images4 from '../assets/Project 4.svg'
import images5 from '../assets/Project 5.svg'
import images6 from '../assets/Project 6.svg'
function ProjectSection (){
  return (
      <div className="projects-section" id='Projects'>
          <h2>Projects</h2>
          <div className="projects-grid">
          <a href='https://github.com/pritamyo/Exploring-India'><img src={images1} alt="Project 1" /></a>
          <a href='https://github.com/hritikbhadani-21/COVID-19_Global_Forecasting'><img src={images2} alt="Project 2" /></a>
          <a href='https://github.com/hritikbhadani-21/BIT-coin-Price-Prediction'><img src={images3} alt="Project 3" /></a>
          <a href='https://github.com/hritikbhadani-21/Prediction-Model'><img src={images4} alt="Project 4" /></a>
          <a href='https://github.com/hritikbhadani-21/Sentiment-Analysis-of-Movie-Reviews'><img src={images5} alt="Project 5" /></a>
          <a href='https://github.com/hritikbhadani-21/Recommendation-System'><img src={images6} alt="Project 6" /></a>
          </div>
      </div>
  );
};

export default ProjectSection;
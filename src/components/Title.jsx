import './Title.css'
import images from '../assets/title img.png'
function Title(){
  return (
      <div className="contact-section">
          <div className="text-container">
              <h1>Hi! I’m Machine Learning Enthusiast and UI/UX designer</h1>
              
              
          </div>
          <div className="image-container">
              <img src={images} alt="Illustration" />
          </div>
      </div>
  );
};

export default Title;
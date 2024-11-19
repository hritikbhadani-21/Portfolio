import './Service.css'
import images1 from '../assets/Service1.jpg'
import images2 from '../assets/Service2.jpg'
import images3 from '../assets/Service3.jpg'
import icons1 from '../assets/icons/Fb.svg'
import icons2 from '../assets/icons/Insta.svg'
import icons3 from '../assets/icons/Twiter.svg'
function Service () {
  return (
      <div className="services-section">
          <h2>Services</h2>
          <div className="services-grid">
              <div className="service-card" data-title="UI/UX">
                  <img src={images1} alt="UI/UX" />
                  
                  <div className="card-content">
                      <h3>UI/UX</h3>
                      <p>Designer</p>
                      <div className="social-icons">
                          <img src={icons1} alt="UI/UX" />
                          <img src={icons2} alt="UI/UX" />
                          <img src={icons3} alt="UI/UX" />
                      </div>
                  </div>
              </div>
              <div className="service-card" data-title="Machine learning">
              <img src={images2} style={{height: "420.3px"}} alt="Machine Learning" />
                  <div className="card-content">
                      <h3>Machine Learning</h3>
                      <p>Algorithms</p>
                      <div className="social-icons">
                          <img src={icons1} alt="UI/UX" />
                          <img src={icons2} alt="UI/UX" />
                          <img src={icons3} alt="UI/UX" />
                      </div>
                  </div>
              </div>
              <div className="service-card" data-title="Graphics Designer">
              <img src={images3} style={{height: "420.3px"}} alt="Graphics Designer" />
                  <div className="card-content">
                      <h3>Graphics Designer</h3>
                      <p>Designer</p>
                      <div className="social-icons">
                          <img src={icons1} alt="UI/UX" />
                          <img src={icons2} alt="UI/UX" />
                          <img src={icons3} alt="UI/UX" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Service;
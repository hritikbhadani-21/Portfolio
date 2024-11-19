import images1 from '../assets/IMG.svg'
import './NavBar.css'
function NavBar ()  {
  return (
      <div className="nav-bar">
          <div className="profile">
          <img className="profile-pic" src={images1}  alt="Profile" />
              <span className="name">Hritik Kumar Bhadani</span>
          </div>
          <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#About me">About Me</a>
              <a href="#Skill">Skills</a>
              <a href="#Projects">Project</a>
          </div><a href='#Contact'><button className="connect">
              Let’s connect
          </button></a>
          
      </div>
  );
};

export default NavBar;
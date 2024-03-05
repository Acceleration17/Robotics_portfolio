// App.js
import React, { useRef } from 'react';
import './App.css'; // Make sure to import the App.css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const NavItem = ({ text, onClick }) => (
  <div className="nav-item" onClick={onClick}>
    <span>{text}</span>
  </div>
);


const Header = ({ onAboutMeClick, onProjectsClick, onResearchClick, onPublicationsClick }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Kino Song</div>
        <div className="nav-actions">
          <div className="nav-items">
            <NavItem text="About Me" onClick={onAboutMeClick} />
            <NavItem text="Projects" onClick={onProjectsClick} />
            <NavItem text="Research" onClick={onResearchClick} />
            <NavItem text="Publications" onClick={onPublicationsClick} />
          </div>
        </div>
      </nav>
    </header>
  );
};


const Button = ({ children, isPrimary }) => (
  <button className={`button ${isPrimary ? 'button-primary' : 'button-secondary'}`}>
    {children}
  </button>
);



const HeroSection = () => {
  return (
    <div className="flex justify-center items-top  bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap md:gap-24 mt-16">
        <div className="pt-20 flex-1 space-y-6">
          <h1 className="text-5xl md:text-5xl font-bold leading-normal">
            <div className="mb-4">From Control System</div>
            <div>to Embodied AI</div>
          </h1><br /><br />
          <p className="text-gray-800 text-xl ">
            Welcome to Kino Song's page! <br /><br />
            I'm a mechanical engineering student at McMaster University with a passion for robotics innovation and problem-solving. <br /><br />
            I'm interested in Robotics System Design. Specifically, I focus on topics in robotic model predictive control (MPC), reinforcement learning,
            and their intersection with <a href="https://plato.stanford.edu/entries/embodied-cognition/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Embodied AI</a>.<br /><br />
            Currently, I am working on my undergraduate Capstone project under the supervision of Dr. Fengjun Yan developing a five-linkages two-wheeled jumping robot.
            The project involves both mechanical and mechatronics design, and most importantly, it provides an interesting platform for me to design an LQR controller and an MPC model for robust robot control.<br /><br />
            For the next step, I am planning to use Nvidia Isaac Sim to train the robot's jumping procedure and prevent slipping under different environmental settings. I am also very interested in the Sim2Real challenge as I already experience many problems when transferring from Simulink to real-life.<br /><br />
            If you are interested or have any question in this two-wheeled jumping robot project, please feel free to reach out to me through my email: <a href="mailto:hello@relume.io" className="text-black text-xl underline">songg14@mcmaster.ca</a>
          </p>
          <div className="flex gap-4">
            {/* Additional content can be added here */}
          </div>
        </div>
        <div className=" pt-20 flex-1 mt-8 md:mt-0">
          <img
            src="DSCF2248.png" // Replace with your image path
            alt="Descriptive text for image"
            className="max-w-full h-auto" // Ensures the image is responsive and doesn't exceed its natural width
            style={{
              maxHeight: '800px', // Ensures the image doesn't exceed the height of 1080px
              objectFit: 'contain', // Ensures the image is contained within the element's box, maintaining its aspect ratio
            }}
          />
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const fixedWidthStyle = { width: '1100px' }; // You can change '500px' to your desired width

  return (
    <div className="w-full px-16 py-24 bg-white flex flex-col items-center gap-20">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center text-black text-base font-semibold">Projects</div>
        <div className="flex flex-col items-center gap-6" style={fixedWidthStyle}>
          <h2 className="text-center text-black text-5xl font-bold leading-snug">A Two-Wheeled Jumping Robot</h2>
          <p className="text-center text-black text-lg font-normal leading-snug">
            Inspired by ETH Zurich's Ascento, but with a more approachable design.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16">
        {/* Project 1 */}
        <div className="flex flex-col items-start gap-6" style={fixedWidthStyle}>
          <img src="iteration.jpg" alt="Project Thumbnail" style={fixedWidthStyle} />
          
          <div className="w-full flex justify-between items-start gap-40">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-black text-2xl font-bold">Structural Topology Optimization</h3>
              <p className="w-full text-black text-base font-normal">
                Topology optimization enables low-cost FDM 3D-printed parts to withstand over 1000N of imposed force.
              </p>
            </div>
            <div className="h-6 justify-center items-center gap-2 flex">
            <button className="text-black text-base font-normal">View Project</button>
            <FontAwesomeIcon icon={faArrowRight} className="4px" />
            </div>
            
          </div>
        </div>
        {/* Additional projects would follow the same structure as Project 1 */}
      </div>

      <div className="pt-10 flex flex-col items-center gap-20">
        {/* Project 1 */}
        <div className="flex flex-col items-start gap-6" style={fixedWidthStyle}>
          <img src="simtoreal.jpg" alt="Project Thumbnail" style={fixedWidthStyle} />
          <div className="w-full flex justify-between items-start gap-20">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-black text-2xl font-bold">Sim to Real</h3>
              <p className="w-full text-black text-base font-normal">
              From Simulink's virtual environment to real-life testing and optimization.
              </p>
            </div>
            <div className="h-6 justify-center items-center gap-2 flex">
            <button className="text-black text-base font-normal">View Project</button>
            <FontAwesomeIcon icon={faArrowRight} className="4px" />
          </div>
          </div>
        </div>
        {/* Additional projects would follow the same structure as Project 1 */}
      </div>
    </div>
  );
};

const FocusSection = () => {
  return (
    <div className="flex justify-center items-top bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap md:gap-24 my-16">
        <div className=" flex-1 space-y-6">
          <h2 className="text-5xl md:text-5xl font-bold leading-normal">
            <div className="mb-4">Intersection of</div>
            <div className="mb-4">RL & Embodied AI</div>
          </h2>
          <p className="text-gray-800 text-xl ">
            I am mostly interested in the idea of building an agent model that is embodied and embedded in the environment.
            The model (or models) can learn from its past experiences and easily adapt its skills to new tasks and environmental dynamics.<br /><br />
            </p>

            <p className="text-gray-800 text-xl font-semibold">
            Currently, I'm actively looking for graduate study opportunities to work on projects that involve embodied AI, reinforcement learning, and robotic control.
            If you are interested in my previous work on the two-wheeled jumping robot, please feel free to reach out to me.
          </p>
        </div>
        <div className="pt-10 flex-1 mt-8 md:mt-0">
          <img
            src="isaacSim.png" // Replace with your image path
            alt="Intersection of Reinforcement Learning & Embodied AI"
            className="max-w-full h-auto" // Ensures the image is responsive and doesn't exceed its natural width
            style={{
              maxHeight: '807px', // Ensures the image doesn't exceed the height of 640px
              objectFit: 'contain', // Ensures the image is contained within the element's box, maintaining its aspect ratio
            }}
          />
        </div>
      </div>
    </div>
  );
};


const ContactSection = () => {
  return (
    <div className="bg-white py-28 px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0">
          <h2 className="text-left text-black text-4xl font-bold mb-4">Contact Me</h2>
          
          <div className="pt-10 space-y-10">
            <div className="flex flex-col items-start">
              <span className="text-black text-xl font-bold">Email</span>
              
              <a href="mailto:hello@relume.io" className="text-black text-base font-normal underline">songg14@mcmaster.ca</a>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-black text-xl font-bold">Phone</span>
            
              <a href="tel:+15550000000" className="text-black text-base font-normal underline">+1 (416) 520-9437</a>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-black text-xl font-bold">LinkedIn</span>
              <span className="text-black text-base font-normal"><a href="https://www.linkedin.com/in/kinosong/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Kino Song</a></span>
              
            </div>

            <div className="flex flex-col items-start">
              <span className="text-black text-xl font-bold">CV</span>
              <span className="text-black text-base font-normal"><a href="https://drive.google.com/file/d/1yNF2nLITc9X1t1XE2qpKbmXXnz2sXLjO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Kino Song's CV</a></span>
              
            </div>


          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end"></div>
          <img
            src="test2.png" // Replace with your image path
            alt="Contact Visual"
            style={{ maxWidth: '832px', height: '516px' }}
          />
        </div>
      </div>
    
  );
};



function App() {
  const heroSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const focusSectionRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });
  
  return (
<div className="App">
      <Header
        onAboutMeClick={() => scrollToRef(heroSectionRef)}
        onProjectsClick={() => scrollToRef(projectsSectionRef)}
        onResearchClick={() => scrollToRef(focusSectionRef)}
        onPublicationsClick={() => scrollToRef(projectsSectionRef)}
      />
      <div ref={heroSectionRef}><HeroSection /></div>
      <div ref={projectsSectionRef}><ProjectsSection /></div>
      <div ref={focusSectionRef}><FocusSection /></div>
      <ContactSection />
    </div>

  );
}

export default App;

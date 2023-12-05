//import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Card from './components/Card';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Testimonials from './components/testimonials'

function App() {
  return (
    <div className="App container" >
      <NavBar />
      <header className="App-header">
      </header>
      <div className="row">
        <img src="./images/948654.jpg" alt="..." />
      </div>
      <div id="AboutMe">
        <AboutMe />
      </div>
      {/* <div id="test">
        <Testimonials />
      </div> */}
      <div id="Resume" className="vh-100 py-5 justify-content-center">
        <h1 className="text-center">Resume</h1>
        <Resume />
      </div>
      <div className="py-5">
        <div id="Projects" className="py-5 text-center">
          <h1 >Active Projects</h1>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <Card CardTitle="This Website" CardText="The source code for this website" Link1="https://github.com/jogeorg/website" Link2="error.html" Image="./images/laptop.jpg" />
          <Card CardTitle="Microservices with GO" CardText="microservice apps written in go" Link1="https://github.com/jogeorg/go-micro" Link2="https://go-micro.johnmichaelgeorge.com" Image="./images/zip.jpg" />
          <Card CardTitle="Azure Resource Requestor" CardText="App for requesting Azure resources in Terraform" Link1="https://github.com/jogeorg/solution_accelerator/" Link2="https://github.com/jogeorg/solution_accelerator/" Image="./images/terraform-azure.png" />
          {/* <Card CardTitle="VR AI app" CardText="Some unity VR app with AI in it" Link1="" Image="./images/VR-Healthcare-scaled.jpg" /> */}
        </div>
      </div>
      <div id="Contact" className="py-5">
        <Contact />
      </div>
    </div >
  );
}

export default App;

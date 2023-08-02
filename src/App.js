//import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Card from './components/Card';
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App container" >
      <NavBar />
      <header className="App-header">
      </header>
      <div className="row">
        <img src="./images/pexels-pixabay-36717.jpg" className="h-100" alt="..." />
      </div>

      <div id="Resume" className="vh-100 py-5 justify-content-center">
        <h1 className="text-center">Resume</h1>
        <Resume />
      </div>
      <div className="py-5">
        <div id="Projects" className="py-5 text-center">
          <h1 >Projects</h1>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <Card CardTitle="This Website" CardText="The source code for this website" Link="" Image="./images/laptop.jpg" />
          <Card CardTitle="Compression CLI" CardText="CLI app written in go to perform file compression and decompression" Link="" Image="./images/zip.jpg" />
          <Card CardTitle="Azure Resource Requestor" CardText="Website for requesting Azure resources in Terraform" Link="" Image="./images/terraform-azure.png" />
          <Card CardTitle="VR AI app" CardText="Some unity VR app with AI in it" Link="" Image="./images/VR-Healthcare-scaled.jpg" />
        </div>
      </div>
      <div id="Contact" className="py-5">
        <Contact />
      </div>
    </div >
  );
}

export default App;

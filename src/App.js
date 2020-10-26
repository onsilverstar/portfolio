import './App.css';
import Header from "./header/header"
import AboutSection from "./about/about.js"
import Resume from "./resume/resume"
import Portfolio from "./portfolio/portfolio"
import Contact from "./contact/contact"
import Testimonials from "./testimonials/testimonials"
import Footer from "./footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutSection/>
      <Resume/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Skills from './component/Skills';
import Profile from './component/Profile';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Header from './component/Header';
import Personel from './component/Personel';

function App() {

  return (
    <div className="App">
      <Header/>
      <Personel/>
      <div id="skillsScroll"></div>
      <Skills/>
      <Profile/>
      <div id="projectsScroll"></div>
      <Projects/>
      <div id="contactScroll"></div>
      <Footer/>

    </div>
  );
}

export default App;
